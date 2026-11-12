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
		"content": `<style>.qckaiebad {
  fill: currentColor;
  d: path("M14.5 3L19 7.5v2.564h-1V8h-4V4H7.248l-.923-.948q.063-.029.134-.04Q6.529 3 6.616 3zm3.934 12.053Q18 14.619 18 13.987t.434-1.067t1.066-.433t1.066.433t.434 1.067t-.434 1.066q-.433.434-1.066.434t-1.066-.434m1.72 6.632l-4.07-4.07q-.44.326-.984.289t-.948-.44t-.44-.948q-.037-.545.288-.985l-8-8v11.854q0 .23.192.423t.423.192h5.327v1H6.616q-.691 0-1.153-.462T5 19.385V6.53L2.046 3.577l.708-.708L20.86 20.977z");
}
</style><path class="qckaiebad"/>`,
		"fallback": "material-symbols-light:document-share-off-outline",
	});
}

export default Component;
