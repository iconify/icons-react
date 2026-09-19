import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2yr9bbdq.css';
import '../../css/a/a300s-bkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2yr9bbdq"/><circle class="a300s-bkh"/></g>`,
		"fallback": "icon-park:elephant",
	});
}

export default Component;
