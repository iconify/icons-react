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
		"content": `<style>.zwlud-5vw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.7071 8.2929L10 2L16.2929 8.2929M10 2L10 22L21 22");
}
</style><path class="zwlud-5vw"/>`,
		"fallback": "keyline-icons:corner-left-up-sharp",
	});
}

export default Component;
