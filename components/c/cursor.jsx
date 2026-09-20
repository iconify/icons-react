import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_qoy-d5y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_qoy-d5y"/>`,
		"fallback": "picon:cursor",
	});
}

export default Component;
