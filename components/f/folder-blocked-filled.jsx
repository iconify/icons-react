import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw9r7gbbd.css';
import '../../css/u/ull6c1baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw9r7gbbd"/><path class="ull6c1baj"/>`,
		"fallback": "tdesign:folder-blocked-filled",
	});
}

export default Component;
