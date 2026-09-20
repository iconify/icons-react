import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdcvqzrgc.css';
import '../../css/c/ctbyddqaj.css';
import '../../css/h/hiyww-p6x.css';
import '../../css/r/rzyuh294q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdcvqzrgc"/><path class="ctbyddqaj"/><path class="hiyww-p6x"/><path class="rzyuh294q"/>`,
		"fallback": "selfhst:homescreen-hero-dark",
	});
}

export default Component;
