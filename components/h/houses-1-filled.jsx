import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4lpbh9cz.css';
import '../../css/j/jb-34lb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4lpbh9cz"/><path class="jb-34lb8e"/>`,
		"fallback": "tdesign:houses-1-filled",
	});
}

export default Component;
