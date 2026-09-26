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
		"content": `<style>.n3lca2bsv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 14L6 3M9.2929 6.2929L6 3L2.7071 6.2929M10 18L21 18M17.7071 21.2929L21 18L17.7071 14.7071M15 3L19 3M21 5L21 9M19 11L15 11M13 5L13 9");
}
</style><path class="n3lca2bsv"/>`,
		"fallback": "keyline-icons:expand-dashed-up-right-box-sharp-fill",
	});
}

export default Component;
