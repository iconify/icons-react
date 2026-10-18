import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/flqpksb2m.css';
import '../../css/b/bfmigqbus.css';
import '../../css/f/fqe-cmx_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="flqpksb2m"/><path class="bfmigqbus"/><path class="fqe-cmx_g"/></g>`,
		"fallback": "vadivam:calendar-clock",
	});
}

export default Component;
