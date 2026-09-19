import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azei6ab0l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azei6ab0l"/>`,
		"fallback": "ant-design:file-exclamation-filled",
	});
}

export default Component;
