import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j5kq2dbji.css';
import '../../css/j/jl00xv8ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j5kq2dbji"/><path class="jl00xv8ke"/></g>`,
		"fallback": "vadivam:id-card-lanyard",
	});
}

export default Component;
