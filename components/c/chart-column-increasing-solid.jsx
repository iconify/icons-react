import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghnz36bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghnz36bqk"/>`,
		"fallback": "mynaui:chart-column-increasing-solid",
	});
}

export default Component;
