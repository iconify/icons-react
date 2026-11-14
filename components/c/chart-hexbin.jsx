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
		"content": `<style>.atvakc29a {
  fill: currentColor;
  d: path("m13.75 4l3.681 2.125v4.25L13.75 12.5l-3.681-2.125v-4.25Zm-3.5 6.5l3.681 2.125v4.25L10.25 19l-3.681-2.125v-4.25Z");
}

.myzmabc6d {
  d: path("m6.5 4l3.681 2.125v4.25L6.5 12.5l-3.681-2.125v-4.25Z");
}

.p1mvfebxl {
  d: path("m17.5 10.5l3.681 2.125v4.25L17.5 19l-3.681-2.125v-4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="myzmabc6d"/><path class="atvakc29a"/><path class="p1mvfebxl"/></g>`,
		"fallback": "uix-sharp:chart-hexbin",
	});
}

export default Component;
