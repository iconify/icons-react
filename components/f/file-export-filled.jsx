import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-3ub4btr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-3ub4btr"/>`,
		"fallback": "lsicon:file-export-filled",
	});
}

export default Component;
