import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdtnx0blw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdtnx0blw"/>`,
		"fallback": "pinhead:circle-with-dot",
	});
}

export default Component;
