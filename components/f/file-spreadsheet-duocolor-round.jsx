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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tfi6fcbzc {
  d: path("M13 3H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9m-6-6l6 6m-6-6v4a2 2 0 0 0 2 2h4");
}

.tnjx2bf7d {
  stroke-opacity: 0.4;
  d: path("M8 13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm0 2h8m-5-3v6");
}
</style><g class="nrj6p8qat"><path class="tnjx2bf7d"/><path class="tfi6fcbzc"/></g>`,
		"fallback": "coolicons:file-spreadsheet-duocolor-round",
	});
}

export default Component;
