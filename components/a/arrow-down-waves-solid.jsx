import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wruy1ebcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wruy1ebcq"/>`,
		"fallback": "mynaui:arrow-down-waves-solid",
	});
}

export default Component;
