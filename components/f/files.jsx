import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dv0tblbtb.css';
import '../../css/m/mn0p9jmip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dv0tblbtb"/><path class="mn0p9jmip"/></g>`,
		"fallback": "vadivam:files",
	});
}

export default Component;
