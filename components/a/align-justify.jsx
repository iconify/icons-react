import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5oo-jpmb.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5oo-jpmb"/>`,
		"fallback": "wpf:align-justify",
	});
}

export default Component;
