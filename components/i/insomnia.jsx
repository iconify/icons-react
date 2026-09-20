import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc047hg3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc047hg3p"/>`,
		"fallback": "thesvg-color:insomnia",
	});
}

export default Component;
