import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enb9o6bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enb9o6bms"/>`,
		"fallback": "nrk:checkmark-circle-checked-solid",
	});
}

export default Component;
