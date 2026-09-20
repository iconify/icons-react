import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp53h7iuv.css';
import '../../css/c/cs02177wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp53h7iuv"/><path class="cs02177wb"/>`,
		"fallback": "tdesign:install-filled",
	});
}

export default Component;
