import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9l3diuic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9l3diuic"/>`,
		"fallback": "griddy-icons:file-upload-filled",
	});
}

export default Component;
