import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rnxn9db_o.css';
import '../../css/f/fq0mcjbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rnxn9db_o"/><path class="fq0mcjbxr"/></g>`,
		"fallback": "lucide:file-headphone",
	});
}

export default Component;
