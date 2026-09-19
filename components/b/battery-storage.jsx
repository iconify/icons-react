import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezl868bnv.css';
import '../../css/o/o79l_2b7k.css';
import '../../css/i/ibq8pqb4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="ezl868bnv"/><path class="o79l_2b7k"/><path class="ibq8pqb4n"/></g>`,
		"fallback": "icon-park:battery-storage",
	});
}

export default Component;
