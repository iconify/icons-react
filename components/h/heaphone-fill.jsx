import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjj35evch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjj35evch"/>`,
		"fallback": "mage:heaphone-fill",
	});
}

export default Component;
