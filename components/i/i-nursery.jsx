import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox-rx1bbi.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox-rx1bbi"/>`,
		"fallback": "medical-icon:i-nursery",
	});
}

export default Component;
