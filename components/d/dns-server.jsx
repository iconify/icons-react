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
		"content": `<style>.irl5pr73i {
  d: path("M15.25 18.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ruir5fbuz {
  d: path("M13.2 21.5H3v-19h16v10M3 8.75h16m-16 6.5h10.4M6.5 5.5h.01M6.5 12h.01m-.01 6.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vr863vb8t {
  d: path("M17.25 18.5a1.25 3.25 0 1 0 2.5 0a1.25 3.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ruir5fbuz"/><path class="irl5pr73i"/><path class="vr863vb8t"/></g>`,
		"fallback": "uix-sharp:dns-server",
	});
}

export default Component;
