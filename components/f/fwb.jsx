import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqgn4zb9y.css';
import '../../css/i/i2zu83iwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqgn4zb9y"/><path class="i2zu83iwi"/>`,
		"fallback": "token:fwb",
	});
}

export default Component;
