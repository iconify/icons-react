import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdoxi1qjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdoxi1qjp"/>`,
		"fallback": "iconamoon:check-fill",
	});
}

export default Component;
