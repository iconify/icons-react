import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_8ntkbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_8ntkbfc"/>`,
		"fallback": "streamline-ultimate:bookmark-cancel-delete-bold",
	});
}

export default Component;
