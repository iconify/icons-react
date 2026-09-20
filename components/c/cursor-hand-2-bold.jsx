import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjgfipbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjgfipbme"/>`,
		"fallback": "streamline-ultimate:cursor-hand-2-bold",
	});
}

export default Component;
