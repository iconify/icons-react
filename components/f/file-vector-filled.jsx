import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chcka6bgr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chcka6bgr"/>`,
		"fallback": "dinkie-icons:file-vector-filled",
	});
}

export default Component;
