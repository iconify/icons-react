import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjh84mamu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xjh84mamu"/>`,
		"fallback": "reicon:dumbbell2",
	});
}

export default Component;
