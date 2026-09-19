import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctd5_sb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ctd5_sb5e"/>`,
		"fallback": "healthicons:hospital-symbol-24px",
	});
}

export default Component;
