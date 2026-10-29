import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqb102bra.css';
import '../../css/f/fcae2s9ga.css';
import '../../css/h/hw2roquec.css';
import '../../css/m/mch358e_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a wqb102bra"/><path class="fcae2s9ga wm-k"/><path class="hw2roquec wm-k"/><path class="mch358e_u wm-a"/>`,
		"fallback": "withicons-bauhaus:gift",
	});
}

export default Component;
