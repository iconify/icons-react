import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc86c7rgn.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc86c7rgn"/>`,
		"fallback": "icomoon-free:connection",
	});
}

export default Component;
