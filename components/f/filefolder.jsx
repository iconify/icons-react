import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dop_v-6bo.css';
import '../../css/q/qcna4wjtc.css';
import '../../css/c/ct7l-y_5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dop_v-6bo"/><path class="qcna4wjtc"/><path class="ct7l-y_5r"/>`,
		"fallback": "fxemoji:filefolder",
	});
}

export default Component;
