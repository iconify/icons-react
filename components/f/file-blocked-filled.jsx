import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql3-6mw4a.css';
import '../../css/y/y81vbnbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql3-6mw4a"/><path class="y81vbnbsu"/>`,
		"fallback": "tdesign:file-blocked-filled",
	});
}

export default Component;
