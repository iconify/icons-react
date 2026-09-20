import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idyqitxti.css';
import '../../css/r/rarxg-bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idyqitxti"/><path class="rarxg-bxy"/>`,
		"fallback": "tdesign:hospital-1-filled",
	});
}

export default Component;
