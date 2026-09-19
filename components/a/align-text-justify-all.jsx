import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrej8qxjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zrej8qxjm"/>`,
		"fallback": "griddy-icons:align-text-justify-all",
	});
}

export default Component;
