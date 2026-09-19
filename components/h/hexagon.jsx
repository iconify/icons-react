import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd5_3bctn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd5_3bctn"/>`,
		"fallback": "f7:hexagon",
	});
}

export default Component;
