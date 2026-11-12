import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adpj7nbwk.css';
import '../../css/h/h7s3e_b2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adpj7nbwk"/><path class="h7s3e_b2o"/>`,
		"fallback": "selfhst:hawser",
	});
}

export default Component;
