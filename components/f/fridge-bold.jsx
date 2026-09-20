import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ydc2y06_v.css';
import '../../css/z/zru8ojbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ydc2y06_v"/><path class="zru8ojbdf"/></g>`,
		"fallback": "solar:fridge-bold",
	});
}

export default Component;
