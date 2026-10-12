import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggf-x0bwa.css';
import '../../css/s/s3akstboo.css';
import '../../css/i/itmwzqbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggf-x0bwa"/><path class="s3akstboo"/><path class="itmwzqbyo"/></g>`,
		"fallback": "andrsrxn:file-xls",
	});
}

export default Component;
