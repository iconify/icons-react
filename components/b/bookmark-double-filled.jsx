import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cza95wglm.css';
import '../../css/m/mrmylhbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cza95wglm"/><path class="mrmylhbxf"/>`,
		"fallback": "tdesign:bookmark-double-filled",
	});
}

export default Component;
