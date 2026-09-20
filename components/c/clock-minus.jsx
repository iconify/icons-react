import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wvfjdvj6c.css';
import '../../css/g/gfu8oh_ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wvfjdvj6c"/><path class="gfu8oh_ql"/></g>`,
		"fallback": "tabler:clock-minus",
	});
}

export default Component;
