import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j58fo5boa.css';
import '../../css/n/nl5urroan.css';
import '../../css/n/nzn5jmbcw.css';
import '../../css/v/vbt6lu91g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j58fo5boa"/><path class="nl5urroan"/><path clip-rule="evenodd" class="nzn5jmbcw"/><path clip-rule="evenodd" class="vbt6lu91g"/></g>`,
		"fallback": "streamline-kameleon-color:farm-pop",
	});
}

export default Component;
