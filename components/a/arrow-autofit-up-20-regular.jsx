import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.loijgk-5u {
  fill: currentColor;
  d: path("m16.142 4.81l-1.14-1.18V17.5a.5.5 0 1 1-1 0V3.626L12.86 4.809a.5.5 0 0 1-.72-.694l1.821-1.886a.75.75 0 0 1 1.08 0l1.82 1.886a.5.5 0 1 1-.72.694M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.5a.5.5 0 0 0 0-1z");
}
</style><path class="loijgk-5u"/>`,
		"fallback": "fluent:arrow-autofit-up-20-regular",
	});
}

export default Component;
