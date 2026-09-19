import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl912rbdb.css';
import '../../css/h/hduycmbms.css';
import '../../css/e/e84_jcm9v.css';
import '../../css/b/b3a0n5bzq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bl912rbdb"/><path class="hduycmbms"/><path class="e84_jcm9v"/><path class="b3a0n5bzq"/></g>`,
		"fallback": "fluent-emoji-flat:clapper-board",
	});
}

export default Component;
