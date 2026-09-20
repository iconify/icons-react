import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asfjflilj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asfjflilj"/>`,
		"fallback": "pinhead:ampersand",
	});
}

export default Component;
