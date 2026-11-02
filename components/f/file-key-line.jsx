import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bopebe6hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bopebe6hs"/>`,
		"fallback": "mingcute:file-key-line",
	});
}

export default Component;
