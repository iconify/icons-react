import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttdn_fbpn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttdn_fbpn"/>`,
		"fallback": "fa7-brands:dolibarr",
	});
}

export default Component;
