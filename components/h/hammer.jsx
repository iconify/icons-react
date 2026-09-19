import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzw0a731h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzw0a731h"/>`,
		"fallback": "f7:hammer",
	});
}

export default Component;
