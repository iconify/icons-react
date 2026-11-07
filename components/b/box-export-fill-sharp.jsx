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
		"content": `<style>.bls5mm6ij {
  fill: currentColor;
  d: path("m3 5.329l8.557-4.226c.279-.137.607-.137.886 0l9 4.445a1 1 0 0 1 .557.896V12a1 1 0 0 1-2 0V8.054l-5.742 2.835Zm1 2.725l9 4.444V22a1 1 0 0 1-1.441.897h-.002l-9-4.445A1 1 0 0 1 2 17.556V7.066Zm13.293 12.239L18.586 19H15a1 1 0 0 1 0-2h3.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}
</style><path class="bls5mm6ij"/>`,
		"fallback": "coolicons:box-export-fill-sharp",
	});
}

export default Component;
