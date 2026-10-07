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
		"content": `<style>.wk2g-lbng {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.9417 19.6637L7.1788 5L12.4158 19.6637M3.9645 14L10.3931 14M19 20L19 9M15.7071 12.2929L19 9L22.2929 12.2929");
}
</style><path class="wk2g-lbng"/>`,
		"fallback": "keyline-icons:a-arrow-up-sharp-fill",
	});
}

export default Component;
