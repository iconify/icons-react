import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9k_4b-vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9k_4b-vj"/>`,
		"fallback": "iconaut:divide-solid",
	});
}

export default Component;
