import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn80i1bxm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rn80i1bxm"/>`,
		"fallback": "lsicon:file-txt-filled",
	});
}

export default Component;
