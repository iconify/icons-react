import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m58c5-3dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m58c5-3dy"/>`,
		"fallback": "vadivam:file-stack",
	});
}

export default Component;
