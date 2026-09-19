import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq715zbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yq715zbjo"/>`,
		"fallback": "griddy-icons:file-edit-filled",
	});
}

export default Component;
