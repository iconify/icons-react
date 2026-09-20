import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gv_4pqnlw.css';
import '../../css/r/rus9pebka.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gv_4pqnlw"/><circle class="rus9pebka"/><rect class="jhxi-trnl"/></g>`,
		"fallback": "lucide:contact-2",
	});
}

export default Component;
