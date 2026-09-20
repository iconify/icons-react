import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oswrj__up.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oswrj__up"/>`,
		"fallback": "streamline:bug-virus-folder-solid",
	});
}

export default Component;
