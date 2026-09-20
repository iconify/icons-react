import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlj_3z6ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlj_3z6ww"/>`,
		"fallback": "simple-icons:campaignmonitor",
	});
}

export default Component;
