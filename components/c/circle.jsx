import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu_o6abjo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lu_o6abjo"/>`,
		"fallback": "codicon:circle",
	});
}

export default Component;
