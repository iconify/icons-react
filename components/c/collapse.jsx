import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf14otbiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf14otbiy"/>`,
		"fallback": "flat-color-icons:collapse",
	});
}

export default Component;
