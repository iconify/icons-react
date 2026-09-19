import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayj-8mbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayj-8mbki"/>`,
		"fallback": "bx:bxl-medium",
	});
}

export default Component;
