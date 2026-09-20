import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm78aw60m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm78aw60m"/>`,
		"fallback": "uiw:d-caret",
	});
}

export default Component;
