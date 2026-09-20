import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb6zfvr1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb6zfvr1t"/>`,
		"fallback": "octicon:flowchart-24",
	});
}

export default Component;
