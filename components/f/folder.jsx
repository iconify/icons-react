import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0_h4g3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql0_h4g3t"/>`,
		"fallback": "feather:folder",
	});
}

export default Component;
