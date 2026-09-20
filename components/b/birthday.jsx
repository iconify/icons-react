import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz_93fbdm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz_93fbdm"/>`,
		"fallback": "picon:birthday",
	});
}

export default Component;
