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
		"content": `<style>.g3f86pbne {
  d: path("M6 4.25A1.75 1.75 0 0 1 7.75 2.5h11.5A1.75 1.75 0 0 1 21 4.25 1.75 1.75 0 0 1 19.25 6H7.75A1.75 1.75 0 0 1 6 4.25");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojk--hbsz {
  d: path("M3 11a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.qlmv4fbzq {
  d: path("M6 14.5h12");
}
</style><g class="nrj6p8qat"><path class="g3f86pbne"/><path class="ojk--hbsz"/><path class="qlmv4fbzq"/></g>`,
		"fallback": "iconmind:dataset-version-outline-regular",
	});
}

export default Component;
