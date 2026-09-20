import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jztxctbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jztxctbzl"/>`,
		"fallback": "streamline-ultimate:dentistry-tooth-shield-bold",
	});
}

export default Component;
