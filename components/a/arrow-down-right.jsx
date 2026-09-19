import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a36ekem9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a36ekem9j"/>`,
		"fallback": "boxicons:arrow-down-right",
	});
}

export default Component;
