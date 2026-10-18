import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/o/ocsvobbfk.css';
import '../../css/q/qr12-ubkl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="ocsvobbfk"/><path class="qr12-ubkl"/>`,
		"fallback": "energy-icons:contract-for-difference-20",
	});
}

export default Component;
