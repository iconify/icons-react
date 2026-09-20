import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie1dssbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie1dssbnk"/>`,
		"fallback": "ri:footprint-fill",
	});
}

export default Component;
