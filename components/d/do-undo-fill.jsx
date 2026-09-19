import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlb_rob2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlb_rob2q"/>`,
		"fallback": "iconamoon:do-undo-fill",
	});
}

export default Component;
