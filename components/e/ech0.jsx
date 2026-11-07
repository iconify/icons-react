import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6iw_7bgc.css';
import '../../css/t/t2qw1ybvw.css';
import '../../css/o/o394wrbot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="u6iw_7bgc"/><circle class="t2qw1ybvw"/><path class="o394wrbot"/>`,
		"fallback": "selfhst:ech0",
	});
}

export default Component;
