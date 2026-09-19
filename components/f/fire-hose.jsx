import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf1zk3yha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf1zk3yha"/>`,
		"fallback": "guidance:fire-hose",
	});
}

export default Component;
