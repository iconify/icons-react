import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e9ciqvuqj.css';
import '../../css/g/geck92ley.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e9ciqvuqj"/><path class="geck92ley"/></g>`,
		"fallback": "matita:chefs-pick",
	});
}

export default Component;
