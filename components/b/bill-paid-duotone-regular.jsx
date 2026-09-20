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
		"content": `<style>.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sar34x8xa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uwjz-dbef {
  d: path("m9 12 2 2 4 -4");
}

.wo--el8ej {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wo--el8ej"/><path class="sar34x8xa"/><path class="ky4omnbla"/><path class="uwjz-dbef"/></g>`,
		"fallback": "iconmind:bill-paid-duotone-regular",
	});
}

export default Component;
