import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaj0pkbxd.css';

const viewBox = {"width":1179,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaj0pkbxd"/>`,
		"fallback": "websymbol:comment-alt",
	});
}

export default Component;
