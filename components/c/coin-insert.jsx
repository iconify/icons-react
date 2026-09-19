import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpmydebry.css';
import '../../css/k/kgk78cbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpmydebry"/><path class="kgk78cbiv"/>`,
		"fallback": "circum:coin-insert",
	});
}

export default Component;
