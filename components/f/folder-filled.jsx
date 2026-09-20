import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1a67jbsv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v1a67jbsv"/>`,
		"fallback": "lsicon:folder-filled",
	});
}

export default Component;
