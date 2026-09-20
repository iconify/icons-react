import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcx3dab_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcx3dab_r"/>`,
		"fallback": "token:cmdx",
	});
}

export default Component;
