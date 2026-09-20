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
		"content": `<style>.be5gt_bmt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12h15.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e6cqo_biq {
  d: path("m6 12 5 -5");
}

.fuo4460wo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17.5 9.5 20 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gorvssbqo {
  d: path("M17.5 9.5 20 12l-2.5 2.5");
}

.hyrj3cfwo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 12 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kliut9bht {
  d: path("m10 12 5 5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tpkouhbgu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 12 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ytqok-bxz {
  d: path("M2 12h15.5");
}
</style><g class="s0phu2bbs"><path class="be5gt_bmt"/><path class="fuo4460wo"/><path class="tpkouhbgu"/><path class="hyrj3cfwo"/><path class="ytqok-bxz"/><path class="gorvssbqo"/><path class="e6cqo_biq"/><path class="kliut9bht"/></g>`,
		"fallback": "iconmind:greedy-decode-duotone-bold",
	});
}

export default Component;
