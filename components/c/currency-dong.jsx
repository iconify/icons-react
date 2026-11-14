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
		"content": `<style>.tcrsyrbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 14.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM14.75 4v14.25M12.5 6.5h5M7 21h10.5");
}
</style><path class="tcrsyrbuo"/>`,
		"fallback": "uix-sharp:currency-dong",
	});
}

export default Component;
