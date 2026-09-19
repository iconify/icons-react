import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfun62owm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfun62owm"/>`,
		"fallback": "gg:code-climate",
	});
}

export default Component;
