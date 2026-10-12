import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf57vxb7w.css';
import '../../css/w/wy9-3fben.css';
import '../../css/l/lgqjfkjbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hf57vxb7w"/><path class="wy9-3fben"/><path class="lgqjfkjbs"/></g>`,
		"fallback": "andrsrxn:file-measure",
	});
}

export default Component;
