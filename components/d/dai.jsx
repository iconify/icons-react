import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqhw7zbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqhw7zbfm"/>`,
		"fallback": "token:dai",
	});
}

export default Component;
