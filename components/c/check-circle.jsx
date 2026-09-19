import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev9-qvtll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev9-qvtll"/>`,
		"fallback": "fe:check-circle",
	});
}

export default Component;
