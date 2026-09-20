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
		"content": `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.kpq1gpbkz {
  d: path("M5 9a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="nrj6p8qat"><path class="i2-ny_bzf"/><path class="kpq1gpbkz"/><path class="z8g2jgblp"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:boxplot-outline-regular",
	});
}

export default Component;
