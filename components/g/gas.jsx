import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi796lndd.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi796lndd"/>`,
		"fallback": "picon:gas",
	});
}

export default Component;
