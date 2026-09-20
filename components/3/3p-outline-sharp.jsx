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
		"content": `<style>.trwy6jdnm {
  fill: currentColor;
  d: path("M8 14h8v-.55q0-1.1-1.1-1.775T12 11t-2.9.675T8 13.45zm5.413-4.587Q14 8.825 14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10t1.413-.587M2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="trwy6jdnm"/>`,
		"fallback": "material-symbols:3p-outline-sharp",
	});
}

export default Component;
