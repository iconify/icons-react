import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrd764yhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrd764yhj"/>`,
		"fallback": "akar-icons:equal-fill",
	});
}

export default Component;
