import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5vxlebhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5vxlebhx"/>`,
		"fallback": "streamline-plump:file-folder-remix",
	});
}

export default Component;
