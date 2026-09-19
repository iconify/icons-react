import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp6nr1bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sp6nr1bih"/>`,
		"fallback": "cuida:caret-up-outline",
	});
}

export default Component;
