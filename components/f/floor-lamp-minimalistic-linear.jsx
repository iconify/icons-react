import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/g/g40jultif.css';
import '../../css/j/j9k_jgbfh.css';
import '../../css/n/no9-lkimx.css';
import '../../css/y/y6dum9mni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="g40jultif"/><path class="j9k_jgbfh"/><path class="no9-lkimx"/><path class="y6dum9mni"/></g>`,
		"fallback": "solar:floor-lamp-minimalistic-linear",
	});
}

export default Component;
