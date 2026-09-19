import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsxfjy2lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsxfjy2lx"/>`,
		"fallback": "cbi:bento-pdf",
	});
}

export default Component;
