import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elnfgwwuk.css';
import '../../css/u/u5h-mpcos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elnfgwwuk"/><circle class="u5h-mpcos"/>`,
		"fallback": "circum:compass-1",
	});
}

export default Component;
