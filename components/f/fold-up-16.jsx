import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhosj8bpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhosj8bpp"/>`,
		"fallback": "octicon:fold-up-16",
	});
}

export default Component;
