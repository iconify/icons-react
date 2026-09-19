import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldttmvrxv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldttmvrxv"/>`,
		"fallback": "f7:calendar-badge-plus",
	});
}

export default Component;
