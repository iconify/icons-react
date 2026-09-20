import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6gn4b3ev.css';
import '../../css/q/qbrse918c.css';
import '../../css/p/pr7mw8ssc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t6gn4b3ev"/><path class="qbrse918c"/><path class="pr7mw8ssc"/>`,
		"fallback": "selfhst:anchr",
	});
}

export default Component;
