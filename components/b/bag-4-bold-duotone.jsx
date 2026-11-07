import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpptw4brn.css';
import '../../css/f/fq3gxbred.css';
import '../../css/e/ec8ku5buv.css';
import '../../css/w/wr7qp9b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpptw4brn"/><path class="fq3gxbred"/><path class="ec8ku5buv"/><path class="wr7qp9b-e"/>`,
		"fallback": "solar:bag-4-bold-duotone",
	});
}

export default Component;
