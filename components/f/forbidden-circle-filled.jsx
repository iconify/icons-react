import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he5vvvb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he5vvvb1f"/>`,
		"fallback": "reicon:forbidden-circle-filled",
	});
}

export default Component;
