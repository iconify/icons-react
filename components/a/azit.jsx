import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwi8-ubww.css';
import '../../css/a/a3qgfdcno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwi8-ubww"/><path class="a3qgfdcno"/>`,
		"fallback": "token:azit",
	});
}

export default Component;
