import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd4zl3h1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd4zl3h1d"/>`,
		"fallback": "reicon:arrow-right-3-filled",
	});
}

export default Component;
