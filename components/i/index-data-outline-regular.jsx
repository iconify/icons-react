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
		"content": `<style>.bbj1r8bpd {
  d: path("M4 14h12");
}

.lpaeqt_qp {
  d: path("M4 9h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tvpgdo31a {
  d: path("M2 6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ucd51obdt {
  d: path("M19 6v12");
}

.wj36vd5ho {
  d: path("m17 16 2 2 2 -2");
}
</style><g class="nrj6p8qat"><path class="tvpgdo31a"/><path class="lpaeqt_qp"/><path class="bbj1r8bpd"/><path class="ucd51obdt"/><path class="wj36vd5ho"/></g>`,
		"fallback": "iconmind:index-data-outline-regular",
	});
}

export default Component;
