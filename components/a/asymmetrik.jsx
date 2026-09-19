import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h133c6uhc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h133c6uhc"/>`,
		"fallback": "fa7-brands:asymmetrik",
	});
}

export default Component;
