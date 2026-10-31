import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykogtzkiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykogtzkiq"/>`,
		"fallback": "coolicons:circle-chevron-double-left-fill-round",
	});
}

export default Component;
