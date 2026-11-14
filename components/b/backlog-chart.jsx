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
		"content": `<style>.hr525v8jw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v17.5h9.2M6 17.25V13m3 4.25V9.5m3 7.75V5.5M15 16h7v1.5a1 1 0 0 0 0 2V21h-7v-1.5a1 1 0 0 0 0-2Z");
}
</style><path class="hr525v8jw"/>`,
		"fallback": "uix-sharp:backlog-chart",
	});
}

export default Component;
