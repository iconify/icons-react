import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv9xlxb3o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/t/tlvvk8-lt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv9xlxb3o"/><path class="hwjgqrbah"/><path class="tlvvk8-lt"/>`,
		"fallback": "energy-icons:cloud-minus-48-bold",
	});
}

export default Component;
