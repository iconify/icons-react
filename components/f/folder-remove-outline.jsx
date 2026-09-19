import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wih7av0dv.css';
import '../../css/g/gx2betbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wih7av0dv"/><path class="gx2betbgm"/>`,
		"fallback": "eva:folder-remove-outline",
	});
}

export default Component;
