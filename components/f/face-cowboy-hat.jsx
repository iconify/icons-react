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
		"content": `<style>.al1tf1bqg {
  d: path("M10 17q2 2 4 0");
}

.cmihs_b8c {
  d: path("M7.5 12V8c0-3 2.5-4 4.5-2.5C14 4 16.5 5 16.5 8v4M4 12a8 8 0 0 0 16 0M8.75 14.75h.01m6.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ntiiepbdb {
  d: path("M2.5 10q.25 2 1.5 2h16q1.25 0 1.5-2");
}
</style><g class="hntgybcog"><path class="ntiiepbdb"/><path class="cmihs_b8c"/><path class="al1tf1bqg"/></g>`,
		"fallback": "uix:face-cowboy-hat",
	});
}

export default Component;
