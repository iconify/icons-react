import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjc6tp_vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjc6tp_vo"/>`,
		"fallback": "ci:instagram",
	});
}

export default Component;
