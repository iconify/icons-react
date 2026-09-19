import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nv2wnob8f.css';
import '../../css/s/s3q_tvbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nv2wnob8f"/><path class="s3q_tvbac"/></g>`,
		"fallback": "humbleicons:battery-half",
	});
}

export default Component;
