import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcbtqib-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcbtqib-n"/>`,
		"fallback": "icomoon-free:fire",
	});
}

export default Component;
