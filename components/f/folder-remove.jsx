import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqtd-_a6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqtd-_a6p"/>`,
		"fallback": "reicon:folder-remove",
	});
}

export default Component;
