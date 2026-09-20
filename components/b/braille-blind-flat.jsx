import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-fvvyzkd.css';
import '../../css/n/n1xkpfbit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-fvvyzkd"/><path class="n1xkpfbit"/></g>`,
		"fallback": "streamline-plump-color:braille-blind-flat",
	});
}

export default Component;
