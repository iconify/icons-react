import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/net5hhbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="net5hhbra"/>`,
		"fallback": "simple-icons:2fas",
	});
}

export default Component;
