import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqijny-7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqijny-7m"/>`,
		"fallback": "si:direction-alt-line",
	});
}

export default Component;
