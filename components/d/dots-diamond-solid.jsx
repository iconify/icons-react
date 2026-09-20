import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi7pd_b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi7pd_b3v"/>`,
		"fallback": "mynaui:dots-diamond-solid",
	});
}

export default Component;
