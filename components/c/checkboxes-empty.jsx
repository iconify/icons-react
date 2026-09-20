import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjyxj_bwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xjyxj_bwx"/>`,
		"fallback": "ix:checkboxes-empty",
	});
}

export default Component;
