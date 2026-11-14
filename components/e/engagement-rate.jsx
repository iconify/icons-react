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
		"content": `<style>.ru00v8b9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.305 19.806C12.11 19.933 12 20 12 20S3 14.5 3 8.75C3 6.1 5.1 4 7.75 4C9.5 4 11.1 5 12 6.5C12.9 5 14.5 4 16.25 4C18.9 4 21 6.1 21 8.75c0 1.074-.314 2.138-.824 3.16m-5.426 9.34l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="ru00v8b9k"/>`,
		"fallback": "uix-sharp:engagement-rate",
	});
}

export default Component;
