import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzgf_2bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzgf_2bvw"/>`,
		"fallback": "mynaui:chevron-right-waves-solid",
	});
}

export default Component;
