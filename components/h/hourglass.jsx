import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htso_tk2t.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htso_tk2t"/>`,
		"fallback": "whh:hourglass",
	});
}

export default Component;
