import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu_xd3viy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu_xd3viy"/>`,
		"fallback": "lets-icons:folder-add-light",
	});
}

export default Component;
