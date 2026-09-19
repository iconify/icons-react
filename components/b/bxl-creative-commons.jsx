import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzpap0btc.css';
import '../../css/y/ydu5kibqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzpap0btc"/><path class="ydu5kibqt"/>`,
		"fallback": "bx:bxl-creative-commons",
	});
}

export default Component;
