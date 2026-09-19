import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-e1deksh.css';
import '../../css/d/dzrwv9dgi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-e1deksh"/><path class="dzrwv9dgi"/>`,
		"fallback": "ion:copy",
	});
}

export default Component;
