import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4z-e1bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e4z-e1bnl"/>`,
		"fallback": "reicon:arrows-right",
	});
}

export default Component;
