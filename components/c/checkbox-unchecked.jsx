import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwib98sin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vwib98sin"/>`,
		"fallback": "nrk:checkbox-unchecked",
	});
}

export default Component;
