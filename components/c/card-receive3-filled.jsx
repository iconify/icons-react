import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0g1x7baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0g1x7baf"/>`,
		"fallback": "reicon:card-receive3-filled",
	});
}

export default Component;
