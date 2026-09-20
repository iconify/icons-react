import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chyf5xbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chyf5xbrj"/>`,
		"fallback": "tabler:box-off",
	});
}

export default Component;
