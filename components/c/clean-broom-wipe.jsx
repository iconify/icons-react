import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/olqywobdb.css';
import '../../css/n/n86dqqpps.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="olqywobdb"/><path class="n86dqqpps"/></g>`,
		"fallback": "streamline-flex:clean-broom-wipe",
	});
}

export default Component;
