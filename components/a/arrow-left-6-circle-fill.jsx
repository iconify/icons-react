import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vev3c_2kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vev3c_2kq"/>`,
		"fallback": "iconamoon:arrow-left-6-circle-fill",
	});
}

export default Component;
