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
		"content": `<style>.d3f-rpbhx {
  d: path("M5 9h6");
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.nnux97bry {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 9h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qks5qnxyp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 15.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wo--el8ej {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yh3czw4qv {
  d: path("M13 15.5h6");
}
</style><g class="nrj6p8qat"><path class="wo--el8ej"/><path class="nnux97bry"/><path class="qks5qnxyp"/><path class="ky4omnbla"/><path class="d3f-rpbhx"/><path class="yh3czw4qv"/></g>`,
		"fallback": "iconmind:cheque-duotone-regular",
	});
}

export default Component;
