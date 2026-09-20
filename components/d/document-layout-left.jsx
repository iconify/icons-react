import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f29ecibga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f29ecibga"/>`,
		"fallback": "uil:document-layout-left",
	});
}

export default Component;
