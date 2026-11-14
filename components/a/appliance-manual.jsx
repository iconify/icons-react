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
		"content": `<style>.fa9znlbzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5Q8 4 2.5 4.5v14q5.5-.5 9.5 2q4-2.5 9.5-2v-14Q16 4 12 6.5Zm0 0v14");
}
</style><path class="fa9znlbzp"/>`,
		"fallback": "uix-sharp:appliance-manual",
	});
}

export default Component;
