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
		"content": `<style>.adl5jsb0d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 14L10 14L10 21L3 21L3 14ZM3 3L10 3L10 10L3 10L3 3ZM14 3L21 3L21 10L14 10L14 3ZM13.7035 17.1823L16.3333 20L21.2689 14.7118");
}
</style><path class="adl5jsb0d"/>`,
		"fallback": "keyline-icons:grid-squares-check-sharp",
	});
}

export default Component;
