import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywdhsw-0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywdhsw-0h"/>`,
		"fallback": "streamline-sharp:file-bookmark-solid",
	});
}

export default Component;
