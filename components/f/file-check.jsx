import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7rnv2w-u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7rnv2w-u"/>`,
		"fallback": "gravity-ui:file-check",
	});
}

export default Component;
