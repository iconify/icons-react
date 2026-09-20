import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5mogn6wk.css';
import '../../css/z/ziwtbxb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5mogn6wk"/><path class="ziwtbxb3a"/>`,
		"fallback": "mingcute:drone-fill",
	});
}

export default Component;
