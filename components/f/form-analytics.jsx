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
		"content": `<style>.ddw-ttb3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.4 21.5H3.5v-19h17v9.2m-14-5.2h3m-3 3H17m-10.5 4h3m-3 3H12m3.25 5v-3m2.75 3v-7m2.75 7V17");
}
</style><path class="ddw-ttb3j"/>`,
		"fallback": "uix-sharp:form-analytics",
	});
}

export default Component;
