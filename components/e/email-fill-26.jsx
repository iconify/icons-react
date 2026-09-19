import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib8412b3q.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib8412b3q"/>`,
		"fallback": "garden:email-fill-26",
	});
}

export default Component;
