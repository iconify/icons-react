import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqu6-wf_q.css';
import '../../css/f/f4sd7-1jz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqu6-wf_q"/><path class="f4sd7-1jz"/>`,
		"fallback": "garden:external-link-20",
	});
}

export default Component;
