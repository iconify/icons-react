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
		"content": `<style>.ckrzk6zny {
  d: path("M10.5 10.5 8 13l2.5 2.5");
}

.rbwrj-biq {
  d: path("M4 18a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 9a5.5 5.5 0 0 1 4.5 9Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tmlbp1xst {
  d: path("M8 13h7");
}
</style><g class="s0phu2bbs"><path class="rbwrj-biq"/><path class="tmlbp1xst"/><path class="ckrzk6zny"/></g>`,
		"fallback": "iconmind:cloud-backup-outline-bold",
	});
}

export default Component;
