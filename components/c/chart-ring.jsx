import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nnt4vlbdk.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nnt4vlbdk"/><circle class="aqhok2bbj"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "hugeicons:chart-ring",
	});
}

export default Component;
