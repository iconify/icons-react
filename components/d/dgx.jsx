import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/digorjb9f.css';
import '../../css/q/qfy_7db_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="digorjb9f"/><path class="qfy_7db_b"/>`,
		"fallback": "token:dgx",
	});
}

export default Component;
