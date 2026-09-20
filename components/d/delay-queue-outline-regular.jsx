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
		"content": `<style>.aff9hemvj {
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ffja1hbnj {
  d: path("M12 16h3.5");
}

.fmr2g_bno {
  d: path("M3 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.le2s8qb-r {
  d: path("M12 13.5V16");
}

.mz4c5lb-h {
  d: path("M15 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.osjmvib6z {
  d: path("M7 16a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="nrj6p8qat"><path class="fmr2g_bno"/><path class="aff9hemvj"/><path class="mz4c5lb-h"/><path class="osjmvib6z"/><path class="le2s8qb-r"/><path class="ffja1hbnj"/></g>`,
		"fallback": "iconmind:delay-queue-outline-regular",
	});
}

export default Component;
