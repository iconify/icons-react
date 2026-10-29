import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n9x6vcc-x.css';
import '../../css/s/snmwq-m5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n9x6vcc-x"/><path class="snmwq-m5o"/></g>`,
		"fallback": "vadivam:clef-bass",
	});
}

export default Component;
