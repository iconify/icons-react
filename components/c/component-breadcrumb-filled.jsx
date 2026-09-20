import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vexo92b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vexo92b4v"/>`,
		"fallback": "tdesign:component-breadcrumb-filled",
	});
}

export default Component;
