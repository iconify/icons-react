import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwq-xk6uv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwq-xk6uv"/>`,
		"fallback": "dinkie-icons:file-folder-small-filled",
	});
}

export default Component;
