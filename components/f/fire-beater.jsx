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
		"content": `<style>.lsdnsdf8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.146 3.197l5.657 5.657l-4.949 4.949l-5.657-5.657Zm-2.121 7.778l-8.839 8.839M17.975 6.025l-4.95 4.95m-.353-5.303l5.656 5.656m-.078 4.922C18.75 17.5 21 18 21 19a2.75 2.75 0 0 1-5.5 0c0-1 .75-1.75 1.75-2.25Z");
}
</style><path class="lsdnsdf8v"/>`,
		"fallback": "uix-sharp:fire-beater",
	});
}

export default Component;
