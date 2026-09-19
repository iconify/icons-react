import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olmh7yxsb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olmh7yxsb"/>`,
		"fallback": "f7:cloud-sleet-fill",
	});
}

export default Component;
