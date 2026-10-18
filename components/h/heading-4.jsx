import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yifcz_b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yifcz_b_f"/>`,
		"fallback": "vadivam:heading-4",
	});
}

export default Component;
