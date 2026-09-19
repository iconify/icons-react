import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opmr5m07o.css';
import '../../css/c/c5qcubb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opmr5m07o"/><path class="c5qcubb2z"/>`,
		"fallback": "boxicons:arrow-in-down-right-square",
	});
}

export default Component;
