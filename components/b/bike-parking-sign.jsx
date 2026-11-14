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
		"content": `<style>.nooq_jh-p {
  d: path("M5.25 12.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.rnnr6dxjq {
  d: path("M2.5 2.5h19v15h-19Zm9.5 15v4");
}

.rwy2l9_ze {
  d: path("M7.75 12.25L10.5 8h4l1.75 4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rnnr6dxjq"/><path class="nooq_jh-p"/><path class="rwy2l9_ze"/></g>`,
		"fallback": "uix-sharp:bike-parking-sign",
	});
}

export default Component;
