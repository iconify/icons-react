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
		"content": `<style>.ztsfy6b2l {
  fill: currentColor;
  d: path("M6 20L18 20C20.5784 20 22.734 18.0393 22.9776 15.4724C23.2212 12.9055 21.4729 10.5743 18.9405 10.0893C18.4833 6.6052 15.5139 4 12 4C8.4861 4 5.5167 6.6052 5.0595 10.0893C2.5271 10.5743 0.7788 12.9055 1.0224 15.4724C1.266 18.0393 3.4216 20 6 20Z");
}
</style><path class="ztsfy6b2l"/>`,
		"fallback": "keyline-icons:cloud-fill",
	});
}

export default Component;
