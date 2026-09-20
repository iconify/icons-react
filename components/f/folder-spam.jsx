import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueq_z4bgo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueq_z4bgo"/>`,
		"fallback": "quill:folder-spam",
	});
}

export default Component;
