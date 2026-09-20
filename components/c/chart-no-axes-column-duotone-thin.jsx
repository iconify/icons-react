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
		"content": `<style>.ai1ljvb5z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e9_u-df3m {
  d: path("M18 13v7");
}

.f3-bt7bzp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 13v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.flg13-sml {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 10v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h-el3xdlg {
  d: path("M12 6v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u66cvxjqz {
  d: path("M6 10v10");
}
</style><g class="hntgybcog"><path class="flg13-sml"/><path class="ai1ljvb5z"/><path class="f3-bt7bzp"/><path class="u66cvxjqz"/><path class="h-el3xdlg"/><path class="e9_u-df3m"/></g>`,
		"fallback": "iconmind:chart-no-axes-column-duotone-thin",
	});
}

export default Component;
