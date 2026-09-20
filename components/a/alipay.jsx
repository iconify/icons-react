import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9oho0b1l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9oho0b1l"/>`,
		"fallback": "picon:alipay",
	});
}

export default Component;
