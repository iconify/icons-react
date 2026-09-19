import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggkic8rwu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggkic8rwu"/>`,
		"fallback": "dinkie-icons:apple-small",
	});
}

export default Component;
