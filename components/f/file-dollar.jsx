import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx53fjb6m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zx53fjb6m"/>`,
		"fallback": "gravity-ui:file-dollar",
	});
}

export default Component;
