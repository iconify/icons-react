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
		"content": `<style>.elc06ob4j {
  d: path("M8 8h8");
}

.hclo6jb2r {
  d: path("M8 16h8");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="elc06ob4j"/><path class="hclo6jb2r"/><path class="mxzk029nb"/></g>`,
		"fallback": "iconmind:agent-sandbox-limit-outline-bold",
	});
}

export default Component;
