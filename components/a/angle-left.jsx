import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdc_khbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdc_khbsn"/>`,
		"fallback": "uis:angle-left",
	});
}

export default Component;
