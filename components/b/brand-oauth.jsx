import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jl8jcjbbf.css';
import '../../css/f/f_ktbx-xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jl8jcjbbf"/><path class="f_ktbx-xu"/></g>`,
		"fallback": "tabler:brand-oauth",
	});
}

export default Component;
