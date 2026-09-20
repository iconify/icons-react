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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.k0bd6ob3p {
  fill: var(--svg-color--e5615d, #e5615d);
  d: path("M8.513 19.985a1.794 1.794 0 0 1 .821-2.368l8.9-4.32a1.72 1.72 0 0 1 2.317.843a1.795 1.795 0 0 1-.82 2.363l-8.9 4.326a1.72 1.72 0 0 1-2.318-.844");
}

.m1k4xnbcz {
  fill: var(--svg-color--37bec1, #37bec1);
  d: path("M3.45 9.86a1.794 1.794 0 0 1 .822-2.369l8.9-4.32a1.72 1.72 0 0 1 2.317.844a1.794 1.794 0 0 1-.821 2.362l-8.9 4.327a1.723 1.723 0 0 1-2.317-.844");
}

.o_tp-c09e {
  fill: var(--svg-color--fab244, #fab244);
  d: path("M4.019 15.98a1.93 1.93 0 0 1 .855-2.514l5.963-2.97c.9-.45 1.969-.05 2.396.894a1.93 1.93 0 0 1-.855 2.515l-5.963 2.97c-.9.45-1.969.05-2.396-.894");
}
</style><g class="ft5dv1b6b"><path class="m1k4xnbcz"/><path class="o_tp-c09e"/><path class="k0bd6ob3p"/></g>`,
		"fallback": "token-branded:eul",
	});
}

export default Component;
