import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk_xv4fcw.css';
import '../../css/i/iyf1u4g7c.css';
import '../../css/a/aspzlbb5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk_xv4fcw"/><path class="iyf1u4g7c"/><path class="aspzlbb5c"/>`,
		"fallback": "selfhst:glance",
	});
}

export default Component;
