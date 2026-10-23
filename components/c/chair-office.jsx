import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4rzi2n8a.css';
import '../../css/b/b8yyhsbiz.css';
import '../../css/y/yj-jouauh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4rzi2n8a"/><path class="b8yyhsbiz"/><path class="yj-jouauh"/></g>`,
		"fallback": "andrsrxn:chair-office",
	});
}

export default Component;
