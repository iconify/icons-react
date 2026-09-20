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
		"content": `<style>.hjy8rqkzo {
  fill: currentColor;
  d: path("M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j6v5-qbsu {
  d: path("M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.kj-obfgou {
  d: path("M9 22h6");
}

.naeroc6tm {
  d: path("M22 9v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wvg4ydbao {
  d: path("M9 2h6");
}

.yc921jgtb {
  d: path("M2 9v6");
}
</style><g class="nrj6p8qat"><path class="hjy8rqkzo"/><path class="j6v5-qbsu"/><path class="wvg4ydbao"/><path class="kj-obfgou"/><path class="yc921jgtb"/><path class="naeroc6tm"/></g>`,
		"fallback": "iconmind:compute-duotone-regular",
	});
}

export default Component;
