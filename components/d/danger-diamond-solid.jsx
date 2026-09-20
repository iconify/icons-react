import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q938jdcxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q938jdcxt"/>`,
		"fallback": "mynaui:danger-diamond-solid",
	});
}

export default Component;
