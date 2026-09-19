import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-w7pwb2m.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-w7pwb2m"/>`,
		"fallback": "whh:bamboo",
	});
}

export default Component;
