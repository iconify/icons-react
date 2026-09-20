import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdwx1s0ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdwx1s0ae"/>`,
		"fallback": "token:gofx",
	});
}

export default Component;
