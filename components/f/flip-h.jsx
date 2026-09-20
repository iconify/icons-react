import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm8d2ebpn.css';
import '../../css/g/grqo4obbk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm8d2ebpn"/><path class="grqo4obbk"/>`,
		"fallback": "vaadin:flip-h",
	});
}

export default Component;
