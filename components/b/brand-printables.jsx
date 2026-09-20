import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd9zdhbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd9zdhbsc"/>`,
		"fallback": "tabler:brand-printables",
	});
}

export default Component;
