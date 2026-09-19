import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgg-w0bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgg-w0bis"/>`,
		"fallback": "bxs:folder-open",
	});
}

export default Component;
