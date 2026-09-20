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
		"content": `<style>.eyp-fjbcx {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9bf_9bzq {
  d: path("M7 10h3v6H7Z");
}

.qpch75bpm {
  d: path("M14 10h3v6h-3Z");
}
</style><g class="nrj6p8qat"><path class="eyp-fjbcx"/><path class="o9bf_9bzq"/><path class="qpch75bpm"/></g>`,
		"fallback": "iconmind:body-scale-outline-regular",
	});
}

export default Component;
