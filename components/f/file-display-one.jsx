import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu4i87gug.css';
import '../../css/w/wdnwhgycf.css';
import '../../css/l/lysehlayp.css';
import '../../css/p/p5fvr-byr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pu4i87gug"/><path class="wdnwhgycf"/><path class="lysehlayp"/><path class="p5fvr-byr"/></g>`,
		"fallback": "icon-park-outline:file-display-one",
	});
}

export default Component;
