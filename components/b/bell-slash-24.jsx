import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7vaxix2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7vaxix2e"/>`,
		"fallback": "octicon:bell-slash-24",
	});
}

export default Component;
