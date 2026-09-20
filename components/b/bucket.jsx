import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y70itnb8v.css';
import '../../css/f/fm-ao_bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y70itnb8v"/><path class="fm-ao_bpx"/></g>`,
		"fallback": "tabler:bucket",
	});
}

export default Component;
