import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jux9gab8n.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jux9gab8n"/>`,
		"fallback": "ps:eye",
	});
}

export default Component;
