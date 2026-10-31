import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzd3_cbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzd3_cbbt"/>`,
		"fallback": "struq:close",
	});
}

export default Component;
