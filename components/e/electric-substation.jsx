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
		"content": `<style>.ftuhgq31z {
  d: path("M9.75 11.25L7 15h3l-2.75 3.75");
}

.njyew0pvf {
  d: path("M3.5 8.5h10v13h-10Zm14.5 13V4m-2.5 1.5h5m-18 16h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="njyew0pvf"/><path class="ftuhgq31z"/></g>`,
		"fallback": "uix-sharp:electric-substation",
	});
}

export default Component;
