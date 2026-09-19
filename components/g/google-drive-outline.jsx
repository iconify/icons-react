import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmbc5ub3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmbc5ub3i"/>`,
		"fallback": "basil:google-drive-outline",
	});
}

export default Component;
