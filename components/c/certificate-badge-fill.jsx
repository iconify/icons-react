import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqm7u3bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqm7u3bpl"/>`,
		"fallback": "iconamoon:certificate-badge-fill",
	});
}

export default Component;
