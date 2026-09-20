import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqieu0njm.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqieu0njm"/>`,
		"fallback": "jam:bandage",
	});
}

export default Component;
