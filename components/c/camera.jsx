import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zux88jbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zux88jbok"/>`,
		"fallback": "gg:camera",
	});
}

export default Component;
