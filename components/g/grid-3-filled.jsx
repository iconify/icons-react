import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oav3xe.css';
import '../../css/q/qtbnay.css';
import '../../css/o/o9qm1a.css';
import '../../css/j/jqrlmu.css';
import '../../css/s/so-from-12.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oav3xe qtbnay"/><path class="o9qm1a qtbnay"/><path class="jqrlmu qtbnay"/>`,
		"fallback": "line-md:grid-3-filled",
	});
}

export default Component;
