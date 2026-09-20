import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc6iltb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc6iltb5a"/>`,
		"fallback": "octicon:blocked-24",
	});
}

export default Component;
