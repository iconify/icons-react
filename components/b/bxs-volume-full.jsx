import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrbueyx2o.css';
import '../../css/g/gmoythb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrbueyx2o"/><path class="gmoythb1o"/>`,
		"fallback": "bx:bxs-volume-full",
	});
}

export default Component;
