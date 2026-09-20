import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/agai1qb1v.css';
import '../../css/v/ve02e2z0p.css';
import '../../css/z/znuokmbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="agai1qb1v"/><path class="ve02e2z0p"/><path class="znuokmbnp"/></g>`,
		"fallback": "streamline-freehand:android-logo",
	});
}

export default Component;
