import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9v87ubhi.css';
import '../../css/f/fm-3u1bok.css';
import '../../css/z/zagbw963f.css';
import '../../css/f/fp_fcybsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9v87ubhi"/><path class="fm-3u1bok"/><path class="zagbw963f"/><path class="fp_fcybsj"/></g>`,
		"fallback": "andrsrxn:files",
	});
}

export default Component;
