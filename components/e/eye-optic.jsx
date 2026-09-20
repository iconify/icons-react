import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/e30kexavx.css';
import '../../css/w/wcf-dn30j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="e30kexavx"/><path class="wcf-dn30j"/></g>`,
		"fallback": "streamline-plump:eye-optic",
	});
}

export default Component;
