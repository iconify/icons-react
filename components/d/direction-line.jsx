import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynen73b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynen73b7b"/>`,
		"fallback": "si:direction-line",
	});
}

export default Component;
