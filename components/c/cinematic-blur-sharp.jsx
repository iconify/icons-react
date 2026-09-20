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
		"content": `<style>.dsdj-_-um {
  fill: currentColor;
  d: path("m4 3l2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h5v18H2V3zm4 15h8v-.55q0-1.1-1.1-1.775T12 15t-2.9.675T8 17.45zm5.413-4.587Q14 12.825 14 12t-.587-1.412T12 10t-1.412.588T10 12t.588 1.413T12 14t1.413-.587");
}
</style><path class="dsdj-_-um"/>`,
		"fallback": "material-symbols:cinematic-blur-sharp",
	});
}

export default Component;
