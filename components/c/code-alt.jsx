import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd1ifobyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sd1ifobyl"/>`,
		"fallback": "griddy-icons:code-alt",
	});
}

export default Component;
