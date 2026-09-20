import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f__nc6b9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f__nc6b9q"/>`,
		"fallback": "uiw:ie",
	});
}

export default Component;
