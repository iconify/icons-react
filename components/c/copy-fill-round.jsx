import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e62t-5brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e62t-5brw"/>`,
		"fallback": "coolicons:copy-fill-round",
	});
}

export default Component;
