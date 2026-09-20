import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wrg1w4xyu.css';
import '../../css/b/bqxvg_9wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wrg1w4xyu"/><path class="bqxvg_9wj"/></g>`,
		"fallback": "reicon:copyright",
	});
}

export default Component;
