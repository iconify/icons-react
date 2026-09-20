import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al1zjj29l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al1zjj29l"/>`,
		"fallback": "mynaui:ampersand",
	});
}

export default Component;
