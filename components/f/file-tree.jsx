import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcbu6ibrz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vcbu6ibrz"/>`,
		"fallback": "pajamas:file-tree",
	});
}

export default Component;
