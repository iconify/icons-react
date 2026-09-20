import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j46jcnrmf.css';
import '../../css/c/c7pribb8g.css';
import '../../css/f/f2kw73rvw.css';
import '../../css/r/rjv02g7wl.css';
import '../../css/f/fuqldcbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="j46jcnrmf"/><path class="c7pribb8g"/><path class="f2kw73rvw"/><path class="rjv02g7wl"/><path class="fuqldcbte"/></g>`,
		"fallback": "streamline-plump-color:graduation-cap",
	});
}

export default Component;
