import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqae8lbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqae8lbdr"/>`,
		"fallback": "reicon:inbox2",
	});
}

export default Component;
