import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eko1wh1jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eko1wh1jk"/>`,
		"fallback": "coolicons:copy-alt-2-fill-round",
	});
}

export default Component;
