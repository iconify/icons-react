import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gigmts-4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gigmts-4w"/>`,
		"fallback": "si:check-alt-fill",
	});
}

export default Component;
