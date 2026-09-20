import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7k9mhc2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7k9mhc2c"/>`,
		"fallback": "si:clipboard-alt-fill",
	});
}

export default Component;
