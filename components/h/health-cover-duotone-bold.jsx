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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.dgqc-wbei {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 16h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pcwl516xh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qcxa0jb0g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4.5 9.5h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ts5ij9bsc {
  d: path("M12 13v6");
}

.vspm3ybjo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="vspm3ybjo"/><path class="qcxa0jb0g"/><path class="pcwl516xh"/><path class="dgqc-wbei"/><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="ts5ij9bsc"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:health-cover-duotone-bold",
	});
}

export default Component;
