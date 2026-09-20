import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk-hiv93i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk-hiv93i"/>`,
		"fallback": "thesvg-color:automattic",
	});
}

export default Component;
