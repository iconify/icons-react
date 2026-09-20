import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efjsxvbjr.css';
import '../../css/w/wu-q6xb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efjsxvbjr"/><path class="wu-q6xb0v"/></g>`,
		"fallback": "reicon:chef-hat-duotone",
	});
}

export default Component;
