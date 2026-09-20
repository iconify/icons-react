import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm2t-hb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm2t-hb9d"/>`,
		"fallback": "octicon:apps-24",
	});
}

export default Component;
