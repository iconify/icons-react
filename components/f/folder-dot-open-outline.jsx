import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szmhgzb0a.css';
import '../../css/p/pphqfabzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szmhgzb0a"/><path clip-rule="evenodd" class="pphqfabzz"/>`,
		"fallback": "solar:folder-dot-open-outline",
	});
}

export default Component;
