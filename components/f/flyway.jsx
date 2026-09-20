import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5urk7xor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5urk7xor"/>`,
		"fallback": "thesvg-color:flyway",
	});
}

export default Component;
