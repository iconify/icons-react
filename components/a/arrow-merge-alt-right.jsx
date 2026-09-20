import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gp8vybckn.css';
import '../../css/g/gj0r-sbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gp8vybckn"/><path class="gj0r-sbps"/></g>`,
		"fallback": "tabler:arrow-merge-alt-right",
	});
}

export default Component;
