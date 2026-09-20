import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac95nibab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ac95nibab"/>`,
		"fallback": "si:briefcase-fill",
	});
}

export default Component;
