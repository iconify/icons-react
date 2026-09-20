import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sosc3bbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sosc3bbur"/>`,
		"fallback": "streamline:folder-delete-remix",
	});
}

export default Component;
