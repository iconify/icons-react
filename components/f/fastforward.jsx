import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmegq-bas.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmegq-bas"/>`,
		"fallback": "picon:fastforward",
	});
}

export default Component;
