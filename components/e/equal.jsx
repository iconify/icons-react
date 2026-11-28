import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqq00trif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqq00trif"/>`,
		"fallback": "noviair:equal",
	});
}

export default Component;
