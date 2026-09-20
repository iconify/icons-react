import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xultr8o4w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xultr8o4w"/>`,
		"fallback": "temaki:handbag",
	});
}

export default Component;
