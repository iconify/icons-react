import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqn65lb2g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqn65lb2g"/>`,
		"fallback": "picon:bitcoin",
	});
}

export default Component;
