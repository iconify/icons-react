import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4s0jmqnt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4s0jmqnt"/>`,
		"fallback": "pajamas:appearance",
	});
}

export default Component;
