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
		"content": `<style>.buf2o5bsv {
  fill: currentColor;
  d: path("M13 17H2V3h2v12h9zm5.4 4L15 14H5.5V3h6v6h4.225l3.975 8.1l2.45-1.125l1.425 2.625z");
}
</style><path class="buf2o5bsv"/>`,
		"fallback": "material-symbols:airline-seat-legroom-extra-outline-sharp",
	});
}

export default Component;
