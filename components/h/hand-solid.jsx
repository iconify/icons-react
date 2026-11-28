import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvuv0ptpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvuv0ptpn"/>`,
		"fallback": "iconaut:hand-solid",
	});
}

export default Component;
