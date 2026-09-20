import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4yb8v8ih.css';
import '../../css/u/u-uywrbac.css';
import '../../css/g/gzifgrbtd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4yb8v8ih"/><path class="u-uywrbac"/><path class="gzifgrbtd"/>`,
		"fallback": "vaadin:exit-o",
	});
}

export default Component;
