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
		"content": `<style>.kcsood5it {
  d: path("M13.5 2.5L12 4l1.5 1.5m-5.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM12 10.75v3.5");
}

.trhezfjpc {
  d: path("M3.5 12.5A8.5 8.5 0 1 0 12 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="trhezfjpc"/><path class="kcsood5it"/></g>`,
		"fallback": "uix-sharp:genre-idle",
	});
}

export default Component;
