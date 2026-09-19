import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt9os31ki.css';
import '../../css/o/ox5bagm_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt9os31ki"/><path class="ox5bagm_m"/>`,
		"fallback": "bx:bx-clinic",
	});
}

export default Component;
