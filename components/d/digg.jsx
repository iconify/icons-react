import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw9lnybso.css';

const viewBox = {"width":880,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw9lnybso"/>`,
		"fallback": "ls:digg",
	});
}

export default Component;
