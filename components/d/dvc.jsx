import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejpz-g1jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejpz-g1jx"/>`,
		"fallback": "simple-icons:dvc",
	});
}

export default Component;
