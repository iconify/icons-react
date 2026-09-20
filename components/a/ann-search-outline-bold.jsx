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
		"content": `<style>.f1fh1abte {
  d: path("m13 20.5 3 -3 3 3");
}

.qxwxnhbhy {
  d: path("M12.5 12.5 16 16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7h04rdua {
  d: path("M4 9a5 5 0 1 0 10 0A5 5 0 1 0 4 9");
}
</style><g class="s0phu2bbs"><path class="s7h04rdua"/><path class="qxwxnhbhy"/><path class="f1fh1abte"/></g>`,
		"fallback": "iconmind:ann-search-outline-bold",
	});
}

export default Component;
