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
		"content": `<style>.p_jfkcbaa {
  d: path("M12 2.5v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1uhwhtrc {
  fill: currentColor;
  d: path("M12 4h7.5v1.75H12ZM5.5 8.75H12v1.75H5.5ZM12 13.5h5v1.75h-5Zm-8.5 4.75H12V20H3.5Z");
}
</style><g class="ulnmmdpxh"><path class="p_jfkcbaa"/><path class="v1uhwhtrc"/></g>`,
		"fallback": "uix-sharp:chart-bar-diverging",
	});
}

export default Component;
