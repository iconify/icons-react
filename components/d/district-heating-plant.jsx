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
		"content": `<style>.ewb1yrbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v15H3Zm4.5 3v9M12 7v9m4.5-9v9M6 19v2m12-2v2");
}
</style><path class="ewb1yrbjm"/>`,
		"fallback": "uix-sharp:district-heating-plant",
	});
}

export default Component;
