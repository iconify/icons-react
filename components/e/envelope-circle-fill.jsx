import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqh9-2boa.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqh9-2boa"/>`,
		"fallback": "f7:envelope-circle-fill",
	});
}

export default Component;
