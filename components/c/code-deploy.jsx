import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqh8npbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqh8npbxf"/>`,
		"fallback": "griddy-icons:code-deploy",
	});
}

export default Component;
