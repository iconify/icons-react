import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3x6_civt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3x6_civt"/>`,
		"fallback": "lsicon:file-mov-filled",
	});
}

export default Component;
