import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrd_c7u5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrd_c7u5u"/>`,
		"fallback": "lsicon:file-xls-outline",
	});
}

export default Component;
