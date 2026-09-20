import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdmzqfeyj.css';
import '../../css/z/zt3xb3pls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdmzqfeyj"/><path class="zt3xb3pls"/>`,
		"fallback": "tdesign:file-search-filled",
	});
}

export default Component;
