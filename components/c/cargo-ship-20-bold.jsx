import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw0z3v33o.css';
import '../../css/r/ralbey30g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw0z3v33o"/><path class="ralbey30g"/>`,
		"fallback": "energy-icons:cargo-ship-20-bold",
	});
}

export default Component;
