import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfpjugbvy.css';
import '../../css/t/tlqitc8ao.css';
import '../../css/z/zf8mcnxyj.css';
import '../../css/f/ff97exjxv.css';
import '../../css/x/xmpkb-r9i.css';
import '../../css/z/z_q1h8bqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfpjugbvy"/><path class="tlqitc8ao"/><path class="zf8mcnxyj"/><path class="ff97exjxv"/><path class="xmpkb-r9i"/><path class="z_q1h8bqq"/>`,
		"fallback": "energy-icons:house-wind-48-bold",
	});
}

export default Component;
