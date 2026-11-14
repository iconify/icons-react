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
		"content": `<style>.rmtzopbcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17v9.5h-17Zm0 4.75h17M9.25 5v4.75M14.75 5v4.75m-8.25 0v4.75M12 9.75v4.75m5.5-4.75v4.75m-15 4h19");
}
</style><path class="rmtzopbcq"/>`,
		"fallback": "uix-sharp:backsplash",
	});
}

export default Component;
