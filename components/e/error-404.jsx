import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xktlhq9bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xktlhq9bl"/>`,
		"fallback": "tabler:error-404",
	});
}

export default Component;
