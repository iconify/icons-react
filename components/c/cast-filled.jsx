import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3l7nk5td.css';
import '../../css/e/e3oc5fb-n.css';
import '../../css/f/f_orwkojd.css';
import '../../css/y/yy9bcwbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3l7nk5td"/><path class="e3oc5fb-n"/><path class="f_orwkojd"/><path class="yy9bcwbze"/>`,
		"fallback": "tdesign:cast-filled",
	});
}

export default Component;
