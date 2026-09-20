import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csji57hci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="csji57hci"/>`,
		"fallback": "si:add-alarm-fill",
	});
}

export default Component;
