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
		"content": `<style>.kz__4hbfi {
  d: path("M3.5 7.5h17v14h-17ZM3 4q2.25-1.5 4.5 0T12 4t4.5 0T21 4m-9 3.5V18");
}

.qx5ch8hoz {
  d: path("m12 10.5l-3.25 2.75v3.25m3.25-3l3.25 2.75V19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kz__4hbfi"/><path class="qx5ch8hoz"/></g>`,
		"fallback": "uix-sharp:coral-nursery",
	});
}

export default Component;
