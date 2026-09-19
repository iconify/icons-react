import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvnkdr6kn.css';
import '../../css/u/ufqy7fo2b.css';
import '../../css/w/wvnrybc8p.css';
import '../../css/a/azzi7-0in.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qvnkdr6kn"/><path class="ufqy7fo2b"/><path class="wvnrybc8p"/><path class="azzi7-0in"/>`,
		"fallback": "fxemoji:circledideographsecret",
	});
}

export default Component;
