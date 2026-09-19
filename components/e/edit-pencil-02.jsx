import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chikk6bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chikk6bko"/>`,
		"fallback": "ci:edit-pencil-02",
	});
}

export default Component;
