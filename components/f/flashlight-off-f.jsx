import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hskokab0p.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hskokab0p"/>`,
		"fallback": "jam:flashlight-off-f",
	});
}

export default Component;
