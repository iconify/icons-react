import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0_3hsgpg.css';
import '../../css/h/hw9pzduln.css';
import '../../css/x/x8hovebwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0_3hsgpg"/><path class="hw9pzduln"/><path class="x8hovebwh"/>`,
		"fallback": "selfhst:holyarrs-light",
	});
}

export default Component;
