import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_86mbcpr.css';
import '../../css/c/c8vd1xbye.css';
import '../../css/z/z05_jybpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_86mbcpr"/><path class="c8vd1xbye"/><path class="z05_jybpy"/>`,
		"fallback": "token:bat",
	});
}

export default Component;
