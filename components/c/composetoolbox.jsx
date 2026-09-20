import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3e4etbxf.css';
import '../../css/j/jgee_j83r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3e4etbxf"/><path class="jgee_j83r"/>`,
		"fallback": "selfhst:composetoolbox",
	});
}

export default Component;
