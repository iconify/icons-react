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
		"content": `<style>.aw_9pzb8i {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.5 3.6 2.75 8 2.75h.147M16.5 14v1.75m3-1.75v1.75m-4.5 0h6v1.75a3 3 0 0 1-6 0Zm3 4.75V22");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zao0awb7g {
  d: path("M13.488 21.202q-.725.047-1.488.048c-4.4 0-8-1.25-8-2.75v-13C4 4 7.6 2.75 12 2.75S20 4 20 5.5v5.655");
}
</style><g class="ulnmmdpxh"><path class="zao0awb7g"/><path class="aw_9pzb8i"/></g>`,
		"fallback": "uix-sharp:data-source",
	});
}

export default Component;
