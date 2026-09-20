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
		"content": `<style>.d85_p7ook {
  d: path("m7 7 -5 5 5 5");
}

.m_wupbc4b {
  d: path("m17 7 5 5 -5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y5eq5wale {
  d: path("M10 9v6l3 -3Z");
}
</style><g class="nrj6p8qat"><path class="d85_p7ook"/><path class="y5eq5wale"/><path class="m_wupbc4b"/></g>`,
		"fallback": "iconmind:code-interpreter-outline-regular",
	});
}

export default Component;
