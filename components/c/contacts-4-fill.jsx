import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeq3q_egv.css';
import '../../css/o/oomnq0bpf.css';
import '../../css/k/kxrp00z_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeq3q_egv"/><path clip-rule="evenodd" class="oomnq0bpf"/><path class="kxrp00z_z"/>`,
		"fallback": "mingcute:contacts-4-fill",
	});
}

export default Component;
