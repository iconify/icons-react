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
		"content": `<style>.mslly4bki {
  d: path("M7.75 14.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}

.nqj-5nbcg {
  d: path("M12 12v2.5l2 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzk77_b1u {
  d: path("M3 7.5h18v14H3Zm4.5 0L12 3l4.5 4.5M12 3h.01");
}
</style><g class="ulnmmdpxh"><path class="yzk77_b1u"/><path class="mslly4bki"/><path class="nqj-5nbcg"/></g>`,
		"fallback": "uix-sharp:bank-hours",
	});
}

export default Component;
