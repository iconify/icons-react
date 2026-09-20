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
		"content": `<style>.ka4276blj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7.5 5 10 7.5l-4 4 -4 -4L4.5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ll1d18k1h {
  d: path("M3 15v4h18v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p0mfrtbaw {
  d: path("M7.5 5 10 7.5l-4 4 -4 -4L4.5 5");
}

.vs9x-_bah {
  d: path("M19.5 5 22 7.5l-4 4 -4 -4L16.5 5");
}

.whta1s4jw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.5 5 22 7.5l-4 4 -4 -4L16.5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x7kf8ybxc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 15v4h18v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ka4276blj"/><path class="whta1s4jw"/><path class="x7kf8ybxc"/><path class="p0mfrtbaw"/><path class="vs9x-_bah"/><path class="ll1d18k1h"/></g>`,
		"fallback": "iconmind:embed-batch-duotone-regular",
	});
}

export default Component;
