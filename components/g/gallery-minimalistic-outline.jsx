import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfv_stdde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hfv_stdde"/>`,
		"fallback": "solar:gallery-minimalistic-outline",
	});
}

export default Component;
