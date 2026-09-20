import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5xnp4tqf.css';
import '../../css/n/nf1ftjslz.css';
import '../../css/q/q9xg3h76r.css';
import '../../css/j/jbzvj5l8s.css';
import '../../css/n/n_928wbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5xnp4tqf"/><path class="nf1ftjslz"/><path class="q9xg3h76r"/><path class="jbzvj5l8s"/><path class="n_928wbci"/></g>`,
		"fallback": "streamline-cyber-color:cloud-refresh",
	});
}

export default Component;
