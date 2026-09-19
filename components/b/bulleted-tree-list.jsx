import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1wnrrm2l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1wnrrm2l"/>`,
		"fallback": "fluent-mdl2:bulleted-tree-list",
	});
}

export default Component;
