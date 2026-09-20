import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il7hppmle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="il7hppmle"/>`,
		"fallback": "keyline-icons:badge-x-fill",
	});
}

export default Component;
