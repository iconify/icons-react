import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo2b50bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fo2b50bqc"/>`,
		"fallback": "reicon:fast-forward-circle",
	});
}

export default Component;
