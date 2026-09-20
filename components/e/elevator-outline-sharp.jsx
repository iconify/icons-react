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
		"content": `<style>.n4adusb3l {
  fill: currentColor;
  d: path("M7.885 17.5h2v-3.808h1V9.616h-4v4.076h1zm1.753-9.115q.304-.308.304-.753q0-.446-.307-.75t-.753-.305t-.75.307t-.305.753t.308.75t.752.305t.75-.307m4.075 2.115h3.192l-1.596-2.558zm1.596 5.558l1.596-2.558h-3.192zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="n4adusb3l"/>`,
		"fallback": "material-symbols-light:elevator-outline-sharp",
	});
}

export default Component;
