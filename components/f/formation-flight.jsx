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
		"content": `<style>.njcprib5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v9m-5-3l5-2.25l5 2.25M10 12l2-1.25L14 12m-8 1v8m-3.5-3L6 16.25L9.5 18m-5 3.5l1.5-1l1.5 1M18 13v8m-3.5-3l3.5-1.75L21.5 18m-5 3.5l1.5-1l1.5 1");
}
</style><path class="njcprib5g"/>`,
		"fallback": "uix-sharp:formation-flight",
	});
}

export default Component;
