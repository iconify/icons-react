import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrtgdmbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrtgdmbsh"/>`,
		"fallback": "bx:bx-fast-forward",
	});
}

export default Component;
