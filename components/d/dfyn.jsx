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
		"content": `<style>.c1g39myfd {
  d: path("M10.55 13.286H5.314L7.886 3h4.145c2.077 0 3.461 1.882 3.625 3.62c.129 1.39-.54 3.328-.89 4.094h3.92L8.642 21z");
}

.ft5dv1b6b {
  fill: none;
}

.vpesd2iao {
  stop-color: var(--svg-color--b8566f, #b8566f);
}

.ybqdvudrq {
  stop-color: var(--svg-color--60b9e2, #60b9e2);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGVpl6kc7N)" class="c1g39myfd"/><defs><linearGradient id="SVGVpl6kc7N" x1="17.205" x2="4.754" y1="6.729" y2="13.961" gradientUnits="userSpaceOnUse"><stop class="vpesd2iao"/><stop offset="1" class="ybqdvudrq"/></linearGradient></defs></g>`,
		"fallback": "token-branded:dfyn",
	});
}

export default Component;
