import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfz3w9lrl.css';
import '../../css/l/ltep8mzcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yfz3w9lrl"/><path class="ltep8mzcg"/>`,
		"fallback": "bx:female",
	});
}

export default Component;
