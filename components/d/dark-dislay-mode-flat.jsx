import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_cyh3opr.css';
import '../../css/q/qktndqbhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_cyh3opr"/><path clip-rule="evenodd" class="qktndqbhd"/></g>`,
		"fallback": "streamline-plump-color:dark-dislay-mode-flat",
	});
}

export default Component;
