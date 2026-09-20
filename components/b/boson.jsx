import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa8jhvbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xa8jhvbpx"/>`,
		"fallback": "token:boson",
	});
}

export default Component;
