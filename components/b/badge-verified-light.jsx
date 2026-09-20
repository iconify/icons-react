import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvndr4bzf.css';
import '../../css/n/nifei5b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvndr4bzf"/><path class="nifei5b0t"/>`,
		"fallback": "stash:badge-verified-light",
	});
}

export default Component;
