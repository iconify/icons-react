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
		"content": `<style>.qzkcbyvbl {
  fill: currentColor;
  d: path("M8.5 16H16q1.25 0 2.125-.875T19 13t-.875-2.125T16 10q-.2-1.45-1.325-2.475T12.15 6.5q-1.275 0-2.312.65T8.3 9q-1.425.125-2.363 1.088T5 12.5t1.025 2.475T8.5 16m3.5 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="qzkcbyvbl"/>`,
		"fallback": "material-symbols:cloud-circle-rounded",
	});
}

export default Component;
