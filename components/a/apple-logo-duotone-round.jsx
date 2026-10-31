import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpy19tscb.css';
import '../../css/z/zud699bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jpy19tscb"/><path class="zud699bhj"/></g>`,
		"fallback": "coolicons:apple-logo-duotone-round",
	});
}

export default Component;
