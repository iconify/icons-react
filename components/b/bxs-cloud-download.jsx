import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxxyx0bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxxyx0bqm"/>`,
		"fallback": "bx:bxs-cloud-download",
	});
}

export default Component;
