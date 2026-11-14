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
		"content": `<style>.cqai96b2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17v10.5h-17Zm8.5 0c-2-2-3.75-3-3.75-4.75a3.75 3.75 0 0 1 7.5 0C15.75 8 14 9 12 11Zm-3.5 3.5h7M12 6.25h.01");
}
</style><path class="cqai96b2c"/>`,
		"fallback": "uix-sharp:ballot-box-pin",
	});
}

export default Component;
