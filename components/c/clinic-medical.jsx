import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pknpwpb5q.css';
import '../../css/l/l2nst-b0v.css';
import '../../css/k/ks5mnsbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pknpwpb5q"/><path class="l2nst-b0v"/><path class="ks5mnsbdd"/>`,
		"fallback": "uim:clinic-medical",
	});
}

export default Component;
