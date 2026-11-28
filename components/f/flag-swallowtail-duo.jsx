import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s16w2fpog.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sy3k4sw_u.css';
import '../../css/v/vfk79qbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s16w2fpog secondary"/><g class="dt0cm9dhy primary"><path class="sy3k4sw_u"/><path class="vfk79qbjz"/></g>`,
		"fallback": "iconaut:flag-swallowtail-duo",
	});
}

export default Component;
