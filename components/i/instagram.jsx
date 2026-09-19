import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imj4d0blw.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imj4d0blw"/>`,
		"fallback": "el:instagram",
	});
}

export default Component;
