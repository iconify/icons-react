import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":230};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mn-lf3bbr {
  fill: var(--svg-color--4285f4, #4285f4);
  d: path("M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z");
}

.o8eqntbty {
  cx: 42.664px;
  cy: 187.924px;
  fill: var(--svg-color--34a853, #34a853);
  rx: 42.664px;
  ry: 41.604px;
}

.sin2o3-ud {
  fill: var(--svg-color--fbbc04, #fbbc04);
  d: path("M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z");
}
</style><path class="sin2o3-ud"/><path class="mn-lf3bbr"/><ellipse class="o8eqntbty"/>`,
		"fallback": "logos:google-ads",
	});
}

export default Component;
