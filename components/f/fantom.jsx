import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqs_ijbso.css';
import '../../css/g/g1vnq256e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xqs_ijbso"/><path class="g1vnq256e"/>`,
		"fallback": "token:fantom",
	});
}

export default Component;
