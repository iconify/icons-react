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
		"content": `<style>.yc7lafbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.25v-2.5m-2 0h4m-7.25 2.5h11.5l-.37.93l-1.26 3.14l-.37.93h-8.5l-.37-.93l-1.26-3.14l-.37-.93zm3 1.5l.5 2m1.75-2v2m2.25-2l-.5 2M11 10.25h2.75l.07.75l.86 9.5l.07.75h-5.5l.07-.75l.86-9.5l.07-.75z");
}
</style><path class="yc7lafbpq"/>`,
		"fallback": "iconoven:airport-tower-sharp",
	});
}

export default Component;
