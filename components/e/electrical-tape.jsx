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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg617fo1f {
  d: path("M3.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Zm8.5 8.5h8.5");
}

.zfvwb65mq {
  d: path("M8.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="vg617fo1f"/><path class="zfvwb65mq"/></g>`,
		"fallback": "uix-sharp:electrical-tape",
	});
}

export default Component;
