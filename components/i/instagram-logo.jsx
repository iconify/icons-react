import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5jiebe9d.css';
import '../../css/g/g3nrl-xfs.css';
import '../../css/n/n5l7trkqh.css';
import '../../css/w/w2l8tfbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5jiebe9d"/><path class="g3nrl-xfs"/><path class="n5l7trkqh"/><path class="w2l8tfbxi"/></g>`,
		"fallback": "streamline-ultimate-color:instagram-logo",
	});
}

export default Component;
