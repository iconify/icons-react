import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ussur-5ft.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ussur-5ft"/>`,
		"fallback": "f7:at-badge-minus",
	});
}

export default Component;
