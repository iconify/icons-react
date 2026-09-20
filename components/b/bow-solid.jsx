import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/had1qfbbi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="had1qfbbi"/>`,
		"fallback": "streamline:bow-solid",
	});
}

export default Component;
