import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q6dgyrq9a.css';
import '../../css/i/i7iqbpbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path vector-effect="non-scaling-stroke" class="q6dgyrq9a"/><path vector-effect="non-scaling-stroke" class="i7iqbpbxn"/></g>`,
		"fallback": "wordpress:currency-euro",
	});
}

export default Component;
