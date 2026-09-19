import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/najw6-2ug.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="najw6-2ug"/>`,
		"fallback": "f7:ant",
	});
}

export default Component;
