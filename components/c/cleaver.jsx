import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjxi2l7co.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjxi2l7co"/>`,
		"fallback": "pinhead:cleaver",
	});
}

export default Component;
