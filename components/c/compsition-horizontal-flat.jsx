import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftlaln56r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftlaln56r"/>`,
		"fallback": "streamline-color:compsition-horizontal-flat",
	});
}

export default Component;
