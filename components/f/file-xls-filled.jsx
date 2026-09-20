import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opjqw8bvm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="opjqw8bvm"/>`,
		"fallback": "lsicon:file-xls-filled",
	});
}

export default Component;
