import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp-tde7pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp-tde7pa"/>`,
		"fallback": "uil:file-exclamation-alt",
	});
}

export default Component;
