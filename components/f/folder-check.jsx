import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hip0ocbxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hip0ocbxk"/>`,
		"fallback": "gravity-ui:folder-check",
	});
}

export default Component;
