import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nl8ej1bwk.css';
import '../../css/g/grdyajb4w.css';
import '../../css/k/kzs6q0bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nl8ej1bwk"/><path class="grdyajb4w"/><path class="kzs6q0bkn"/></g>`,
		"fallback": "vadivam:images",
	});
}

export default Component;
