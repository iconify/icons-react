import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls0it7-zx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls0it7-zx"/>`,
		"fallback": "whh:croisant",
	});
}

export default Component;
