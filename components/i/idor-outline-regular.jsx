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
		"content": `<style>.b1ew5xbzw {
  d: path("M14 13v5");
}

.bgtolgbkt {
  d: path("M8 15.5h8");
}

.iml3cbclx {
  d: path("M8 7a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qobk6sbqp {
  d: path("M10 13v5");
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="xfs8wlfhn"/><path class="iml3cbclx"/><path class="qobk6sbqp"/><path class="b1ew5xbzw"/><path class="bgtolgbkt"/></g>`,
		"fallback": "iconmind:idor-outline-regular",
	});
}

export default Component;
