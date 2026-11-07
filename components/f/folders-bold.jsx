import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0-gkacxy.css';
import '../../css/y/yxn4dklvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0-gkacxy"/><path class="yxn4dklvx"/>`,
		"fallback": "solar:folders-bold",
	});
}

export default Component;
