import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hir999tlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hir999tlf"/>`,
		"fallback": "thesvg-color:cardano",
	});
}

export default Component;
