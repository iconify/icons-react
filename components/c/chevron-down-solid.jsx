import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_1ja2b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_1ja2b8j"/>`,
		"fallback": "iconaut:chevron-down-solid",
	});
}

export default Component;
