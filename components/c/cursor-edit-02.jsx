import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jrmw6phxs.css';
import '../../css/g/gpt8o555j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jrmw6phxs"/><path class="gpt8o555j"/></g>`,
		"fallback": "hugeicons:cursor-edit-02",
	});
}

export default Component;
