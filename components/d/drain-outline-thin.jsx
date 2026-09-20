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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3yb7ybjz {
  d: path("M2 9h6");
}

.mbzvimb-r {
  d: path("M12 14v5");
}

.mdp-r2mfo {
  d: path("M16 9h6");
}

.tjvfebbkf {
  d: path("M9.5 16.5 12 19l2.5 -2.5");
}

.zpvo49dam {
  d: path("M8 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="zpvo49dam"/><path class="l3yb7ybjz"/><path class="mdp-r2mfo"/><path class="mbzvimb-r"/><path class="tjvfebbkf"/></g>`,
		"fallback": "iconmind:drain-outline-thin",
	});
}

export default Component;
