import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pur09rb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pur09rb2k"/>`,
		"fallback": "ci:folder-check",
	});
}

export default Component;
