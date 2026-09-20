import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rea5ecj9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rea5ecj9b"/>`,
		"fallback": "si:archive-alt-line",
	});
}

export default Component;
