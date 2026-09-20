import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ymqpb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ymqpb9d"/>`,
		"fallback": "thesvg-color:chatglm",
	});
}

export default Component;
