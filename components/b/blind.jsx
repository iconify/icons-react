import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg291qb0x.css';

const viewBox = {"width":1344,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg291qb0x"/>`,
		"fallback": "fa:blind",
	});
}

export default Component;
