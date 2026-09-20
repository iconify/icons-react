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
		"content": `<style>.d_yj7ivmd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 12 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g4h6r4ykz {
  d: path("M12 4v12");
}

.gosl5tbza {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 20h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkaragbav {
  d: path("m8 12 4 4 4 -4");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.trzt6ibtx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="gosl5tbza"/><path class="trzt6ibtx"/><path class="d_yj7ivmd"/><path class="qdn88l2uv"/><path class="g4h6r4ykz"/><path class="pkaragbav"/></g>`,
		"fallback": "iconmind:arrow-down-to-line-duotone-regular",
	});
}

export default Component;
