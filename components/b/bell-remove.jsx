import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyj129fbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyj129fbx"/>`,
		"fallback": "ci:bell-remove",
	});
}

export default Component;
