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
		"content": `<style>.e3hgwus4z {
  d: path("M4.5 6.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nnp9dj82w {
  d: path("M9 9v11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ybts533gz {
  d: path("M15 9v11");
}
</style><g class="nrj6p8qat"><path class="vyks9vbfn"/><path class="rw6ho_bav"/><path class="nnp9dj82w"/><path class="ybts533gz"/><path class="e3hgwus4z"/></g>`,
		"fallback": "iconmind:fact-table-outline-regular",
	});
}

export default Component;
