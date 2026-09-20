import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1u40bb6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1u40bb6y"/>`,
		"fallback": "quill:folder-put",
	});
}

export default Component;
