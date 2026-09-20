import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5fog1mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5fog1mx"/>`,
		"fallback": "tabler:column-remove",
	});
}

export default Component;
