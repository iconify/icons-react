import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngw559-hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngw559-hw"/>`,
		"fallback": "coolicons:clipboard-list-round",
	});
}

export default Component;
