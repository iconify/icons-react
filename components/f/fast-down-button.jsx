import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gfajtbcux {
  d: path("M15.685 11.924c.156-2.318 1.171-4.253 2.557-5.101h27.674c1.39.852 2.404 2.791 2.559 5.113L32.134 34.369z");
}

.gh0cqvbbv {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M64 57.1a6.9 6.9 0 0 1-6.898 6.904H6.892A6.9 6.9 0 0 1-.004 57.1V6.9c0-3.81 3.088-6.9 6.896-6.9h50.21A6.9 6.9 0 0 1 64 6.9z");
}

.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}

.wg8fw-bup {
  d: path("M15.685 34.901c.156-2.318 1.171-4.253 2.557-5.101h27.674c1.39.851 2.404 2.791 2.559 5.112L32.134 57.347z");
}
</style><path class="gh0cqvbbv"/><g class="n1mjunbsu"><path class="gfajtbcux"/><path class="wg8fw-bup"/></g>`,
		"fallback": "emojione-v1:fast-down-button",
	});
}

export default Component;
