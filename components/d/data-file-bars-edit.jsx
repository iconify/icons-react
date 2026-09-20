import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkncxg-fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkncxg-fa"/>`,
		"fallback": "streamline-ultimate:data-file-bars-edit",
	});
}

export default Component;
