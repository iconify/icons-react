import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx1ebmbsz.css';
import '../../css/c/cic6sccqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx1ebmbsz"/><path class="cic6sccqj"/>`,
		"fallback": "qlementine-icons:address-book-remove-16",
	});
}

export default Component;
