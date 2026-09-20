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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_wupbc4b {
  d: path("m17 7 5 5 -5 5");
}

.y5eq5wale {
  d: path("M10 9v6l3 -3Z");
}
</style><g class="hntgybcog"><path class="d85_p7ook"/><path class="y5eq5wale"/><path class="m_wupbc4b"/></g>`,
		"fallback": "iconmind:code-interpreter-outline-thin",
	});
}

export default Component;
