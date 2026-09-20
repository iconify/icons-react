import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvy2h7vyu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvy2h7vyu"/>`,
		"fallback": "teenyicons:distribute-vertical-solid",
	});
}

export default Component;
