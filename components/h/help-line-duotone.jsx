import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tof57eb9e.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tof57eb9e"/><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/></g>`,
		"fallback": "solar:help-line-duotone",
	});
}

export default Component;
