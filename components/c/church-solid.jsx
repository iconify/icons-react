import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm2hqdbxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm2hqdbxj"/>`,
		"fallback": "la:church-solid",
	});
}

export default Component;
