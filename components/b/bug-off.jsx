import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz2__gk7f.css';
import '../../css/a/a2kv77oya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xz2__gk7f"/><path class="a2kv77oya"/></g>`,
		"fallback": "andrsrxn:bug-off",
	});
}

export default Component;
