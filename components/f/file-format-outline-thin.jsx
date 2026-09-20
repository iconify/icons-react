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
		"content": `<style>.hcn7bdzwu {
  d: path("M15 11v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-xxtdbfm {
  d: path("M9 11v7");
}

.r-3ib9fxz {
  d: path("M12 11v7");
}

.tks4a4biu {
  d: path("M13 3H6v18h12V8Z");
}
</style><g class="hntgybcog"><path class="tks4a4biu"/><path class="i-xxtdbfm"/><path class="r-3ib9fxz"/><path class="hcn7bdzwu"/></g>`,
		"fallback": "iconmind:file-format-outline-thin",
	});
}

export default Component;
