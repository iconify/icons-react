import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tfucpxbpj.css';
import '../../css/k/kl60oacpv.css';
import '../../css/q/q7efo8mje.css';
import '../../css/l/lr90u-zsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tfucpxbpj"/><path class="kl60oacpv"/><path class="q7efo8mje"/><path class="lr90u-zsu"/></g>`,
		"fallback": "icon-park:cylinder",
	});
}

export default Component;
