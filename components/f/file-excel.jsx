import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pok4x5b_o.css';
import '../../css/x/xnk1gt9lb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pok4x5b_o"/><path class="xnk1gt9lb"/>`,
		"fallback": "icomoon-free:file-excel",
	});
}

export default Component;
