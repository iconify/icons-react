import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls0nprbji.css';
import '../../css/u/uo-66kwym.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls0nprbji"/><path clip-rule="evenodd" class="uo-66kwym"/>`,
		"fallback": "lineicons:cloud-sun",
	});
}

export default Component;
