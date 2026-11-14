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
		"content": `<style>.ez3y8sb9r {
  d: path("M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-7 9Q9 13 15.5 18");
}

.o54qvsbqq {
  d: path("M10.5 21q5.5-5.5 11-1.5M12 4.25V2.5m5.25 7H19m-12.25 0H5m3.25-3.75L7 4.5m8.75 1.25L17 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ez3y8sb9r"/><path class="o54qvsbqq"/></g>`,
		"fallback": "uix-sharp:desert-sun",
	});
}

export default Component;
