import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpbmm38ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpbmm38ti"/>`,
		"fallback": "keyline-icons:flask-round",
	});
}

export default Component;
