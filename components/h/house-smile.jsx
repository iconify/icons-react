import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp8wsgb-c.css';
import '../../css/s/s-0kk2bod.css';
import '../../css/g/gsvrl7yuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp8wsgb-c"/><path class="s-0kk2bod"/><path class="gsvrl7yuk"/></g>`,
		"fallback": "andrsrxn:house-smile",
	});
}

export default Component;
