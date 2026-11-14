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
		"content": `<style>.r89owkgvx {
  d: path("m13.75 17.5l-2 2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvaqjjx9u {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ytumn967e {
  d: path("m10.25 2.5l2 2l-2 2m10.75 7v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3");
}

.yy5unzblq {
  d: path("M3 10.5v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3");
}
</style><g class="ulnmmdpxh"><path class="uvaqjjx9u"/><path class="yy5unzblq"/><path class="ytumn967e"/><path class="r89owkgvx"/></g>`,
		"fallback": "uix-sharp:heat-pump-cycle",
	});
}

export default Component;
