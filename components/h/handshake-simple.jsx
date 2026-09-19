import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s02nxkbqw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s02nxkbqw"/>`,
		"fallback": "fa7-regular:handshake-simple",
	});
}

export default Component;
