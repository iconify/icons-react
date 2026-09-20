import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ajiubdt.css';
import '../../css/q/qw3mm7brb.css';
import '../../css/y/ypjkckbgw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ajiubdt"/><path class="qw3mm7brb"/><path class="ypjkckbgw"/>`,
		"fallback": "openmoji:cucumber",
	});
}

export default Component;
