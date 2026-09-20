import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o7x5x1gvm.css';
import '../../css/g/gy4hwzihc.css';
import '../../css/t/tq4hd5byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o7x5x1gvm"/><path class="gy4hwzihc"/><path class="tq4hd5byh"/></g>`,
		"fallback": "keyline-icons:circle-navigation-sharp-two-tone",
	});
}

export default Component;
