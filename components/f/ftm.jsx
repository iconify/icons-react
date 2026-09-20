import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6pwpnejz.css';
import '../../css/w/wgjjxmigs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6pwpnejz"/><path class="wgjjxmigs"/>`,
		"fallback": "token:ftm",
	});
}

export default Component;
