import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwftia.css';
import '../../css/y/ydovum.css';
import '../../css/e/es_8rf.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwftia ydovum"/><path class="es_8rf ydovum"/>`,
		"fallback": "line-md:cellphone-twotone",
	});
}

export default Component;
