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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lxq6hebze {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 6 5 5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rijf_sutl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 16h4v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xyvj9ibgz {
  d: path("m6 6 5 5 5 5");
}

.zpx9azgmt {
  d: path("M12 16h4v-4");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="lxq6hebze"/><path class="rijf_sutl"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="xyvj9ibgz"/><path class="zpx9azgmt"/></g>`,
		"fallback": "iconmind:gradient-duotone-bold",
	});
}

export default Component;
