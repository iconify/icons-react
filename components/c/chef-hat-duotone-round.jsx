import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by18iwbit.css';
import '../../css/y/yrjyl2bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="by18iwbit"/><path class="yrjyl2bni"/></g>`,
		"fallback": "coolicons:chef-hat-duotone-round",
	});
}

export default Component;
