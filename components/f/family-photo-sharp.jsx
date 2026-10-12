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
		"content": `<style>.mpv0l3ano {
  d: path("M3 3.75h18v16.5H3z");
}

.mv3due8xc {
  cx: 9.25px;
  cy: 9.5px;
  r: 1.75px;
}

.rupd5jump {
  cx: 15.5px;
  cy: 11.5px;
  r: 1.5px;
}

.vb3-qcbjy {
  d: path("M6.25 17.5V16a3 3 0 0 1 3-3a3 3 0 0 1 3 3v1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0_saccux {
  d: path("M13.25 17.5v-3h4.5v3Z");
}
</style><g class="x2cwu0gfd"><path class="mpv0l3ano"/><circle class="mv3due8xc"/><path class="vb3-qcbjy"/><circle class="rupd5jump"/><path class="z0_saccux"/></g>`,
		"fallback": "iconoven:family-photo-sharp",
	});
}

export default Component;
