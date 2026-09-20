import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wump89b3m.css';
import '../../css/c/c7cnpg7_a.css';
import '../../css/j/jbzcxub9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wump89b3m"/><path class="c7cnpg7_a"/><path class="jbzcxub9v"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-down-2",
	});
}

export default Component;
