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
		"content": `<style>.ah55kfbgu {
  d: path("M19.25 16.75C19 16.25 18.6 16 18 16c-.7 0-1.25.4-1.25 1c0 1.25 2.5.75 2.5 2c0 .6-.55 1-1.25 1c-.6 0-1-.25-1.25-.75");
}

.joh2iug7a {
  d: path("M7.5 21.5v-4h3v4m3.75-3.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjscowbyj {
  d: path("M12.5 21.5h-9v-19h11v10M7 6h.01M11 6h.01M7 9.5h.01m3.99 0h.01M7 13h.01M11 13h.01");
}
</style><g class="ulnmmdpxh"><path class="vjscowbyj"/><path class="joh2iug7a"/><path class="ah55kfbgu"/></g>`,
		"fallback": "uix-sharp:cost-center",
	});
}

export default Component;
