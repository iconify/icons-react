import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y76p2n39j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y76p2n39j"/>`,
		"fallback": "uil:compress-alt-left",
	});
}

export default Component;
