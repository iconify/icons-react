import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhgf4oq2b.css';
import '../../css/l/lguu5_wzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhgf4oq2b"/><path class="lguu5_wzr"/>`,
		"fallback": "tdesign:folder-import-filled",
	});
}

export default Component;
