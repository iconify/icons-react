import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcdqw5b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcdqw5b1x"/>`,
		"fallback": "ci:desktop",
	});
}

export default Component;
