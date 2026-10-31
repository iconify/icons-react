import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zasvw-9gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zasvw-9gk"/>`,
		"fallback": "coolicons:banknote-round",
	});
}

export default Component;
