import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/c/craj1zw4d.css';
import '../../css/o/opzubsbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="craj1zw4d"/><path class="opzubsbfu"/></g>`,
		"fallback": "iconamoon:calculator",
	});
}

export default Component;
