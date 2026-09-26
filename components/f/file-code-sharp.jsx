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
		"content": `<style>.ve6-hobta {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2L4 2L4 22L20 22L20 8L14 2ZM14 2L14 8L20 8M10.2969 11.5547L8 15L10.2969 18.4453M13.7031 11.5547L16 15L13.7031 18.4453");
}
</style><path class="ve6-hobta"/>`,
		"fallback": "keyline-icons:file-code-sharp",
	});
}

export default Component;
