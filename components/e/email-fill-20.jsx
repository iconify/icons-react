import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtwmiac1q.css';
import '../../css/r/re_226bct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtwmiac1q"/><path class="re_226bct"/>`,
		"fallback": "garden:email-fill-20",
	});
}

export default Component;
