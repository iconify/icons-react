import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rro1-sbje.css';

const viewBox = {"width":432,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rro1-sbje"/>`,
		"fallback": "ps:filter",
	});
}

export default Component;
