import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbkhpoy9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbkhpoy9m"/>`,
		"fallback": "thesvg-color:icici-bank",
	});
}

export default Component;
