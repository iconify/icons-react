import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tin16p2kl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tin16p2kl"/>`,
		"fallback": "f7:compass-fill",
	});
}

export default Component;
