import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvr4ljncy.css';
import '../../css/q/qf_fqfblh.css';
import '../../css/s/sopu2lbmd.css';
import '../../css/r/rksq5bbnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uvr4ljncy"/><path class="qf_fqfblh"/><path class="sopu2lbmd"/><circle class="rksq5bbnd"/>`,
		"fallback": "selfhst:dockpeek",
	});
}

export default Component;
