import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv8augtve.css';
import '../../css/c/cqedrde9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv8augtve"/><path class="cqedrde9q"/>`,
		"fallback": "boxicons:contact-book",
	});
}

export default Component;
