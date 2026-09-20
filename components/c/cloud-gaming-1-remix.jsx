import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbwus5b9r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbwus5b9r"/>`,
		"fallback": "streamline:cloud-gaming-1-remix",
	});
}

export default Component;
