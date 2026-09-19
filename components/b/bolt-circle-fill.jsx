import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-nawib5v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-nawib5v"/>`,
		"fallback": "f7:bolt-circle-fill",
	});
}

export default Component;
