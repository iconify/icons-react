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
		"content": `<style>.dxdisqbws {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H8a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V17a4 4 0 0 1-4 4zm0-13a1.5 1.5 0 0 1 1.5 1.5v4.373A2.25 2.25 0 0 1 12 17.8M12 8a1.5 1.5 0 0 0-1.5 1.5v4.373A2.25 2.25 0 0 0 12 17.8");
}

.ft5dv1b6b {
  fill: none;
}

.xvfhj-u6p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 21H8a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V17a4 4 0 0 1-4 4");
}
</style><g class="ft5dv1b6b"><path class="xvfhj-u6p"/><path class="dxdisqbws"/></g>`,
		"fallback": "coolicons:house-thermometer-duotone-round",
	});
}

export default Component;
