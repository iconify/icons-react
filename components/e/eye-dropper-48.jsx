import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvu3z166w.css';
import '../../css/a/a1dehnyjo.css';
import '../../css/c/c6f6snb_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvu3z166w"/><path class="a1dehnyjo"/><path class="c6f6snb_q"/>`,
		"fallback": "energy-icons:eye-dropper-48",
	});
}

export default Component;
