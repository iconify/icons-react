import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fsmb31ovw.css';
import '../../css/j/ju-ctmv8z.css';
import '../../css/j/j7db_6ita.css';
import '../../css/e/e2w_1rb3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fsmb31ovw"/><path class="ju-ctmv8z"/><path class="j7db_6ita"/><path class="e2w_1rb3l"/></g>`,
		"fallback": "streamline-plump-color:fahrenheit",
	});
}

export default Component;
