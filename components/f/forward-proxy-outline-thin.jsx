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
		"content": `<style>.he2cqebcu {
  d: path("M2 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qaaffjxln {
  d: path("M10 12h5");
}

.tdc4xtbqn {
  d: path("M2 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vijdpmg8r {
  d: path("M15 10a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.vzsad0b2k {
  d: path("m4 6 6 6 -6 6");
}

.z3v4a-b3b {
  d: path("M2 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="z3v4a-b3b"/><path class="he2cqebcu"/><path class="tdc4xtbqn"/><path class="vzsad0b2k"/><path class="qaaffjxln"/><path class="vijdpmg8r"/></g>`,
		"fallback": "iconmind:forward-proxy-outline-thin",
	});
}

export default Component;
