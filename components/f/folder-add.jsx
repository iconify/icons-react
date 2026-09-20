import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o49e5qy4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o49e5qy4n"/>`,
		"fallback": "quill:folder-add",
	});
}

export default Component;
