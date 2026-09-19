import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb_pvbb1s.css';
import '../../css/s/sku11tm4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb_pvbb1s"/><circle class="sku11tm4k"/>`,
		"fallback": "carbon:email-new",
	});
}

export default Component;
