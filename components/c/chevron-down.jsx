import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-cbsebnc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-cbsebnc"/>`,
		"fallback": "fa-solid:chevron-down",
	});
}

export default Component;
