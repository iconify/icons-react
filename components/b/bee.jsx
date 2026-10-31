import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ayqjo3syz.css';
import '../../css/f/fcx8ddb_h.css';
import '../../css/x/xsnyx0v1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ayqjo3syz"/><path class="fcx8ddb_h wm-k"/><path class="wm-a xsnyx0v1k"/></g>`,
		"fallback": "withicons-kawaii:bee",
	});
}

export default Component;
