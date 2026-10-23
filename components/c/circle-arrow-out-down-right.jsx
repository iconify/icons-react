import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrr2qmbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrr2qmbcq"/>`,
		"fallback": "vadivam:circle-arrow-out-down-right",
	});
}

export default Component;
