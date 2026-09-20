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
		"content": `<style>.hxagq7byt {
  d: path("M13 11v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.v-cn4ub6a {
  d: path("m13 15 4 -4h4");
}
</style><g class="nrj6p8qat"><path class="skbifdbcx"/><path class="hxagq7byt"/><path class="v-cn4ub6a"/></g>`,
		"fallback": "iconmind:agent-branch-outline-regular",
	});
}

export default Component;
