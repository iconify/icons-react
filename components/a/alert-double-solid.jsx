import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrw5j1c7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrw5j1c7w"/>`,
		"fallback": "iconaut:alert-double-solid",
	});
}

export default Component;
