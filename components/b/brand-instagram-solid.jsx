import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb_uoqb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb_uoqb2z"/>`,
		"fallback": "mynaui:brand-instagram-solid",
	});
}

export default Component;
