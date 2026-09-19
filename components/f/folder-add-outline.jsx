import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2nst-b0v.css';
import '../../css/g/gx2betbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2nst-b0v"/><path class="gx2betbgm"/>`,
		"fallback": "eva:folder-add-outline",
	});
}

export default Component;
