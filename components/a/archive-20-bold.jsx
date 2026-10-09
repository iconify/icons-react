import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-l-y7baz.css';
import '../../css/c/cnp57_zxn.css';
import '../../css/j/jlvwd6bkx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-l-y7baz"/><path class="cnp57_zxn"/><path class="jlvwd6bkx"/>`,
		"fallback": "energy-icons:archive-20-bold",
	});
}

export default Component;
