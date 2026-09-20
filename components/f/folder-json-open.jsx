import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4w-vcsn.css';
import '../../css/t/t9a55g_zp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4w-vcsn"/><path class="t9a55g_zp"/>`,
		"fallback": "material-icon-theme:folder-json-open",
	});
}

export default Component;
