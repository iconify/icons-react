import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xmo4-dlbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.078 18.643l.002-.005q0-.004.003-.008c4.262-13.867 19.17-2.02 19.17-2.02h.005S33.757 5.5 19.773 5.5C9.13 5.5 6.589 11.932 5.982 15.007a6.8 6.8 0 0 0-.198 1.603a6.802 6.802 0 0 0 13.294 2.033M42.216 31.39a6.802 6.802 0 0 0-13.294-2.032h0l-.002.004q0 .004-.003.008c-4.262 13.867-19.17 2.02-19.17 2.02h-.005S14.405 42.5 28.227 42.5c10.643 0 13.184-6.432 13.791-9.507a6.8 6.8 0 0 0 .198-1.603");
}
</style><path class="xmo4-dlbb"/>`,
		"fallback": "arcticons:a-dance-of-fire-and-ice",
	});
}

export default Component;
