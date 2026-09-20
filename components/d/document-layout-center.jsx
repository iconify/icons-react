import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrgwkvp0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrgwkvp0w"/>`,
		"fallback": "uis:document-layout-center",
	});
}

export default Component;
