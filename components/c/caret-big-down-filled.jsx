import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbw-gabhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbw-gabhq"/>`,
		"fallback": "boxicons:caret-big-down-filled",
	});
}

export default Component;
