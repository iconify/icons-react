import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-r24r9hl.css';
import '../../css/t/t9a55g_zp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-r24r9hl"/><path class="t9a55g_zp"/>`,
		"fallback": "material-icon-theme:folder-json",
	});
}

export default Component;
