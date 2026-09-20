import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9-3pccvw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9-3pccvw"/>`,
		"fallback": "quill:folder-drafts",
	});
}

export default Component;
