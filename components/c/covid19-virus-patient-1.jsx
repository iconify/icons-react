import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlej7bzzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlej7bzzh"/>`,
		"fallback": "covid:covid19-virus-patient-1",
	});
}

export default Component;
