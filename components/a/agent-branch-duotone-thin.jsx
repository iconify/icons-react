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
		"content": `<style>.ft030md1w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxagq7byt {
  d: path("M13 11v10");
}

.ijaucublj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 11v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.snz4b14xb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 15 4 -4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v-cn4ub6a {
  d: path("m13 15 4 -4h4");
}
</style><g class="hntgybcog"><path class="ft030md1w"/><path class="ijaucublj"/><path class="snz4b14xb"/><path class="skbifdbcx"/><path class="hxagq7byt"/><path class="v-cn4ub6a"/></g>`,
		"fallback": "iconmind:agent-branch-duotone-thin",
	});
}

export default Component;
