import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arh3zlb8m.css';
import '../../css/c/cqjcetbny.css';
import '../../css/l/l8r-h8nlg.css';
import '../../css/t/tx1vtyvza.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="arh3zlb8m"/><path class="cqjcetbny"/><path clip-rule="evenodd" class="l8r-h8nlg"/><path class="tx1vtyvza"/></g>`,
		"fallback": "streamline-plump-color:dog-1-flat",
	});
}

export default Component;
