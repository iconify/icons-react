import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/synrjp3rl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="synrjp3rl"/>`,
		"fallback": "streamline:folder-delete",
	});
}

export default Component;
