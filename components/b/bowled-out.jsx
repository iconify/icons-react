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
		"content": `<style>.tlk1jjccq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10v11.5M12 10v11.5M16 10v11.5m-9.5-15l3.5-2m3.5-.5L17 6");
}
</style><path class="tlk1jjccq"/>`,
		"fallback": "uix-sharp:bowled-out",
	});
}

export default Component;
