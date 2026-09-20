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
		"content": `<style>.gnhsdzb8d {
  d: path("M6 13h6");
}

.ivc0p9bus {
  d: path("M6 4h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-ezw9csu {
  d: path("M6 16h9");
}

.u__n76blo {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="u__n76blo"/><path class="ivc0p9bus"/><path class="gnhsdzb8d"/><path class="t-ezw9csu"/></g>`,
		"fallback": "iconmind:file-storage-outline-bold",
	});
}

export default Component;
