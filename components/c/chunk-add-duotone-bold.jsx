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
		"content": `<style>.c27cgq4un {
  d: path("M18 8v8");
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.kdq33ubui {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n6ndjw6jf {
  d: path("M4 9h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ux97gqb3r {
  d: path("M2 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.v8c0ocbfs {
  d: path("M4 14h7");
}
</style><g class="s0phu2bbs"><path class="kdq33ubui"/><path class="ux97gqb3r"/><path class="n6ndjw6jf"/><path class="v8c0ocbfs"/><path class="c27cgq4un"/><path class="jlfl_ccwj"/></g>`,
		"fallback": "iconmind:chunk-add-duotone-bold",
	});
}

export default Component;
