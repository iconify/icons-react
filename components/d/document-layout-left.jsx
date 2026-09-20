import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ieabb_g.css';
import '../../css/r/r2qotkj1w.css';
import '../../css/i/i1958g00u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ieabb_g"/><rect class="r2qotkj1w"/><path class="i1958g00u"/>`,
		"fallback": "uim:document-layout-left",
	});
}

export default Component;
