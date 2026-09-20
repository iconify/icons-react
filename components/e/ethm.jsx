import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj9_93b9n.css';
import '../../css/j/j-ja1cc5v.css';
import '../../css/q/qkn211b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj9_93b9n"/><path class="j-ja1cc5v"/><path class="qkn211b9v"/>`,
		"fallback": "token:ethm",
	});
}

export default Component;
