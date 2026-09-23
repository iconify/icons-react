import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/axq4_tbdk.css';
import '../../css/p/pv47n0zht.css';
import '../../css/o/ojlzukb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="axq4_tbdk"/><path class="pv47n0zht"/><path class="ojlzukb4x"/></g>`,
		"fallback": "keyline-icons:cloud-sparkles-duotone",
	});
}

export default Component;
