import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py3-xbc6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py3-xbc6r"/>`,
		"fallback": "reicon:caret-right-filled",
	});
}

export default Component;
