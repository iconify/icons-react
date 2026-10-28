import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy5gpbcfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy5gpbcfp"/>`,
		"fallback": "vadivam:arrow-down-0-1",
	});
}

export default Component;
