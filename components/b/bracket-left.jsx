import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd36210ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd36210ot"/>`,
		"fallback": "iconaut:bracket-left",
	});
}

export default Component;
