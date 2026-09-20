import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lquupobmq.css';
import '../../css/p/pln5qlbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lquupobmq"/><path class="pln5qlbcz"/>`,
		"fallback": "pixel:ellipses-horizontal-circle",
	});
}

export default Component;
