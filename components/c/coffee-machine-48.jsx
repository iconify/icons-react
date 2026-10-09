import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-hb89b0y.css';
import '../../css/q/qm_24p8td.css';
import '../../css/p/p97rajbdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-hb89b0y"/><path class="qm_24p8td"/><path class="p97rajbdm"/>`,
		"fallback": "energy-icons:coffee-machine-48",
	});
}

export default Component;
