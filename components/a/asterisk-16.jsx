import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxb14cb6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxb14cb6p"/>`,
		"fallback": "qlementine-icons:asterisk-16",
	});
}

export default Component;
