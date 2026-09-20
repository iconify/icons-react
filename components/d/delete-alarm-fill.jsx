import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc7as45mv.css';
import '../../css/n/nsrryibqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc7as45mv"/><path clip-rule="evenodd" class="nsrryibqd"/>`,
		"fallback": "si:delete-alarm-fill",
	});
}

export default Component;
