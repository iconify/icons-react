import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk7o3vb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk7o3vb8z"/>`,
		"fallback": "tdesign:focus-filled",
	});
}

export default Component;
