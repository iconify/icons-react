import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9yyhs45b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9yyhs45b"/>`,
		"fallback": "mynaui:funny-square-solid",
	});
}

export default Component;
