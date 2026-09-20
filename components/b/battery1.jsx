import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvhx7ob_d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvhx7ob_d"/>`,
		"fallback": "picon:battery1",
	});
}

export default Component;
