import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iot5qp33d.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iot5qp33d"/>`,
		"fallback": "vs:highchair",
	});
}

export default Component;
