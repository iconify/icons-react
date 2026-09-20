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
		"content": `<style>.uyx0m9bvg {
  fill: currentColor;
  d: path("M12 17q1.65 0 2.825-1.175T16 13H8q0 1.65 1.175 2.825T12 17M7 9h4q0-.825-.587-1.412T9 7t-1.412.588T7 9m6 0h4q0-.825-.587-1.412T15 7t-1.412.588T13 9m-1 13q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13V2h18v11q0 1.875-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m0-2q2.9 0 4.95-2.05T19 13V4H5v9q0 2.9 2.05 4.95T12 20m0-8");
}
</style><path class="uyx0m9bvg"/>`,
		"fallback": "material-symbols:comedy-mask-outline",
	});
}

export default Component;
