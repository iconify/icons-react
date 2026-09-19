import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgx5tmbnx.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgx5tmbnx"/>`,
		"fallback": "fontisto:columns",
	});
}

export default Component;
