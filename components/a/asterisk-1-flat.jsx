import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6zd-wqxa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v6zd-wqxa"/>`,
		"fallback": "streamline-color:asterisk-1-flat",
	});
}

export default Component;
