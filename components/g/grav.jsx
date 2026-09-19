import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuxgncb7p.css';

const viewBox = {"width":1824,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuxgncb7p"/>`,
		"fallback": "fa:grav",
	});
}

export default Component;
