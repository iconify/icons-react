import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vh3ty_nhw.css';
import '../../css/b/bqm3d9bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vh3ty_nhw"/><path class="bqm3d9bkj"/></g>`,
		"fallback": "vadivam:ethernet-port",
	});
}

export default Component;
