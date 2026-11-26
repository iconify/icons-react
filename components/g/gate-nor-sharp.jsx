import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tdk_76bqw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5C11.4139 5.6172 15.2606 7.9252 18 12C15.2606 16.0748 11.4139 18.3828 6 19C7.3684 15.8421 8 13.9473 8 12C8 10.0527 7.3684 8.1579 6 5ZM1 8L7.2031 8M1 16L7.2031 16M18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12Z");
}
</style><path class="tdk_76bqw"/>`,
		"fallback": "keyline-icons:gate-nor-sharp",
	});
}

export default Component;
