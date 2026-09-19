import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6tp-6btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6tp-6btd"/>`,
		"fallback": "covid:covid-19-virus-4",
	});
}

export default Component;
