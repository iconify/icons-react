import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk_glsbdf.css';
import '../../css/r/r3m6txini.css';
import '../../css/z/z5lj_d9rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk_glsbdf"/><path class="r3m6txini"/><path class="z5lj_d9rb"/>`,
		"fallback": "boxicons:fridge",
	});
}

export default Component;
