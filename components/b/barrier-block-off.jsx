import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja8qx3b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja8qx3b4p"/>`,
		"fallback": "tabler:barrier-block-off",
	});
}

export default Component;
