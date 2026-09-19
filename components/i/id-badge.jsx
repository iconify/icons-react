import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufmo4-xzr.css';

const viewBox = {"width":1280,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufmo4-xzr"/>`,
		"fallback": "fa:id-badge",
	});
}

export default Component;
