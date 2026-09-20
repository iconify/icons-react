import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owc77-wfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owc77-wfb"/>`,
		"fallback": "vadivam:arrow-big-right",
	});
}

export default Component;
