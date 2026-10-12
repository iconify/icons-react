import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihm5qgbgf.css';
import '../../css/g/gjr-zv8hz.css';
import '../../css/y/y5qkmsbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ihm5qgbgf"/><path class="gjr-zv8hz"/><path class="y5qkmsbci"/></g>`,
		"fallback": "andrsrxn:file-symlink",
	});
}

export default Component;
