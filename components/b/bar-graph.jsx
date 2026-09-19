import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnwq-4lnv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnwq-4lnv"/>`,
		"fallback": "entypo:bar-graph",
	});
}

export default Component;
