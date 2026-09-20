import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctiym5e7j.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctiym5e7j"/>`,
		"fallback": "jam:flashlight-off",
	});
}

export default Component;
