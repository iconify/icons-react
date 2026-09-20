import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2cn_jb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2cn_jb0d"/>`,
		"fallback": "mynaui:api-solid",
	});
}

export default Component;
