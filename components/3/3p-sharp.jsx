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
		"content": `<style>.crfeiwerh {
  fill: currentColor;
  d: path("M8 14h8v-.55q0-1.1-1.1-1.775T12 11t-2.9.675T8 13.45zm5.413-4.587Q14 8.825 14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10t1.413-.587M2 22V2h20v16H6z");
}
</style><path class="crfeiwerh"/>`,
		"fallback": "material-symbols:3p-sharp",
	});
}

export default Component;
