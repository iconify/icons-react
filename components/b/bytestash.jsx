import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-_33w5dr.css';
import '../../css/w/wu0c0utkt.css';

const viewBox = {"width":496.39,"height":625.48,"left":81.75,"top":17.26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-_33w5dr"/><path class="wu0c0utkt"/>`,
		"fallback": "thesvg-color:bytestash",
	});
}

export default Component;
