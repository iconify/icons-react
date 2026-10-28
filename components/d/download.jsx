import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qroh2w21x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qroh2w21x"/>`,
		"fallback": "codex:download",
	});
}

export default Component;
