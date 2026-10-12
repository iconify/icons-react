import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9lht4boe.css';
import '../../css/e/elbmzxbbp.css';
import '../../css/s/s3skchbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o9lht4boe"/><path class="elbmzxbbp"/><path class="s3skchbtt"/></g>`,
		"fallback": "andrsrxn:file-csv",
	});
}

export default Component;
