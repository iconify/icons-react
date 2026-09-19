import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/rdepw29ic.css';
import '../../css/d/ds9nz3qrr.css';
import '../../css/x/xj9-7bcyf.css';
import '../../css/j/jmjztjsms.css';
import '../../css/f/fr-tfmb9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="rdepw29ic"/><circle class="ds9nz3qrr"/><path class="xj9-7bcyf"/><path class="jmjztjsms"/><path class="fr-tfmb9b"/></g>`,
		"fallback": "icon-park:history-query",
	});
}

export default Component;
