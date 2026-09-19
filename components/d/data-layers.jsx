import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6mx-ub2l.css';
import '../../css/i/iru6fdc4v.css';
import '../../css/m/mq3t55bue.css';
import '../../css/m/m4wse617w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6mx-ub2l"/><path class="iru6fdc4v"/><path class="mq3t55bue"/><path class="m4wse617w"/>`,
		"fallback": "gcp:data-layers",
	});
}

export default Component;
