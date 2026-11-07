import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0gg5hi1k.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0gg5hi1k"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-minus-outline",
	});
}

export default Component;
