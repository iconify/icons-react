import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6d4qmufc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6d4qmufc"/>`,
		"fallback": "f7:gauge-badge-plus",
	});
}

export default Component;
