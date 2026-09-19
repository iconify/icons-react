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
		"content": `<style>.estg6sbhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 8.5l-4.279 8.985a4 4 0 0 1-2.307 2.062L4.5 24");
}

.gtiodcc5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.226 11.5H8.5a4 4 0 0 0-4 4V24");
}

.m-njmk_ax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24H20a4 4 0 0 0 4-4V8.5");
}

.qfa4alr0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 35.5V24L24 8.5h15.5a4 4 0 0 1 4 4v23a4 4 0 0 1-4 4h-31a4 4 0 0 1-4-4");
}
</style><path class="qfa4alr0j"/><path class="gtiodcc5n"/><path class="m-njmk_ax"/><path class="estg6sbhi"/>`,
		"fallback": "arcticons:google-files",
	});
}

export default Component;
