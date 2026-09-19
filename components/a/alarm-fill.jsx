import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_1qbpb8m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_1qbpb8m"/>`,
		"fallback": "f7:alarm-fill",
	});
}

export default Component;
