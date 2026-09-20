import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0ulh_r9o.css';
import '../../css/f/f_rwg-r9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a0ulh_r9o"/><path class="f_rwg-r9r"/>`,
		"fallback": "selfhst:grav",
	});
}

export default Component;
