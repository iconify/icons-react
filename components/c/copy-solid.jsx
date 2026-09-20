import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx9h71b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx9h71b0d"/>`,
		"fallback": "mynaui:copy-solid",
	});
}

export default Component;
