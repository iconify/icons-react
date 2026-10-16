import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c716qmbny.css';
import '../../css/c/cr5l2wclf.css';
import '../../css/e/eqjqtguyx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c716qmbny"/><path class="cr5l2wclf"/><path class="eqjqtguyx"/>`,
		"fallback": "energy-icons:check-valve-48",
	});
}

export default Component;
