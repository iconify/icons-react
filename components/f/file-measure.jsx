import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucnxseb-o.css';
import '../../css/i/iv2g5grrh.css';
import '../../css/l/lgqjfkjbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucnxseb-o"/><path class="iv2g5grrh"/><path class="lgqjfkjbs"/></g>`,
		"fallback": "andrsrxn:file-measure",
	});
}

export default Component;
