import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywgd2lbmm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywgd2lbmm"/>`,
		"fallback": "f7:arrow-up-right",
	});
}

export default Component;
