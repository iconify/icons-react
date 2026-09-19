import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb3cn3bcv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb3cn3bcv"/>`,
		"fallback": "f7:asterisk-circle-fill",
	});
}

export default Component;
