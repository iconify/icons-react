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
		"content": `<style>.dqi3mwb8t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 11v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hxagq7byt {
  d: path("M13 11v10");
}

.kosxb-loy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r150lzz5g {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m13 15 4 -4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.v-cn4ub6a {
  d: path("m13 15 4 -4h4");
}
</style><g class="nrj6p8qat"><path class="kosxb-loy"/><path class="dqi3mwb8t"/><path class="r150lzz5g"/><path class="skbifdbcx"/><path class="hxagq7byt"/><path class="v-cn4ub6a"/></g>`,
		"fallback": "iconmind:agent-branch-duotone-regular",
	});
}

export default Component;
