import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ozv0b7j.css';
import '../../css/o/o3tx_8bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ozv0b7j"/><path class="o3tx_8bof"/>`,
		"fallback": "eos-icons:action-chains-outlined",
	});
}

export default Component;
