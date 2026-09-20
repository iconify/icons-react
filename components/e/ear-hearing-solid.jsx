import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waci2fbya.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="waci2fbya"/>`,
		"fallback": "streamline:ear-hearing-solid",
	});
}

export default Component;
