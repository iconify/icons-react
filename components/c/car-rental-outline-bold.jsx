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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jqdaf4bpj {
  d: path("M12 9.5v3");
}

.m2vc0klek {
  d: path("M12 12.5h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sqwju3bsh {
  d: path("M2 16V8.5h4L9.5 5h5L18 8.5h4V16Z");
}

.v6j2lm37i {
  d: path("M9 12.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="sqwju3bsh"/><path class="du3agkbjb"/><path class="fquh7rbnp"/><path class="v6j2lm37i"/><path class="jqdaf4bpj"/><path class="m2vc0klek"/></g>`,
		"fallback": "iconmind:car-rental-outline-bold",
	});
}

export default Component;
