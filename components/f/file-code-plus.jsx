import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2n051b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2n051b2c"/>`,
		"fallback": "noviair-light:file-code-plus",
	});
}

export default Component;
