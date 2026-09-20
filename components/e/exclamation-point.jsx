import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqb-0_4ig.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqb-0_4ig"/>`,
		"fallback": "pinhead:exclamation-point",
	});
}

export default Component;
