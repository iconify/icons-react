import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxqv9lhyv.css';
import '../../css/c/cg6w78bdt.css';
import '../../css/z/zr4agjfqn.css';
import '../../css/s/svkr3ie9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxqv9lhyv"/><path class="cg6w78bdt"/><path class="zr4agjfqn"/><path class="svkr3ie9j"/>`,
		"fallback": "energy-icons:g-clamp-48",
	});
}

export default Component;
