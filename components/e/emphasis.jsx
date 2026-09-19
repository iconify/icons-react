import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brladpbom.css';

const viewBox = {"width":560,"height":730};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brladpbom"/>`,
		"fallback": "ls:emphasis",
	});
}

export default Component;
