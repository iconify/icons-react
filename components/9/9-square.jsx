import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwhr9xfgv.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwhr9xfgv"/>`,
		"fallback": "vs:9-square",
	});
}

export default Component;
