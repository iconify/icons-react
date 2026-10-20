import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d51hfrlpa.css';
import '../../css/x/xw-l9fkxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d51hfrlpa"/><path class="xw-l9fkxp"/></g>`,
		"fallback": "vadivam:image-up",
	});
}

export default Component;
