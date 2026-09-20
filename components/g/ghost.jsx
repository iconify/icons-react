import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv2tjhb3o.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv2tjhb3o"/>`,
		"fallback": "wpf:ghost",
	});
}

export default Component;
