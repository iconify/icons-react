import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gf9p_8b1r.css';
import '../../css/b/b918t7u_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gf9p_8b1r"/><path class="b918t7u_k"/></g>`,
		"fallback": "tabler:brand-google-maps",
	});
}

export default Component;
