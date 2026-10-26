import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/psgh11omp.css';
import '../../css/i/ixobe5ich.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="psgh11omp"/><path class="ixobe5ich"/></g>`,
		"fallback": "doodle-icons:highlighter",
	});
}

export default Component;
