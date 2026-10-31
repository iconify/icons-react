import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4k5yfan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4k5yfan"/>`,
		"fallback": "coolicons:apple-fill-round",
	});
}

export default Component;
