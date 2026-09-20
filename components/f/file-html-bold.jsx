import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwktenbay.css';
import '../../css/o/oxf12mjhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwktenbay"/><path class="oxf12mjhy"/>`,
		"fallback": "streamline-ultimate:file-html-bold",
	});
}

export default Component;
