import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiwgf_byw.css';
import '../../css/c/ci54x0bdq.css';
import '../../css/z/zng18pbqo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiwgf_byw"/><path class="ci54x0bdq"/><path class="zng18pbqo"/>`,
		"fallback": "energy-icons:cupcake-20",
	});
}

export default Component;
