import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu23513nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cu23513nj"/>`,
		"fallback": "lsicon:apps-filled",
	});
}

export default Component;
