import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tjutxbbqq.css';
import '../../css/s/sd8cfcjbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tjutxbbqq"/><path class="sd8cfcjbo"/></g>`,
		"fallback": "keyline-icons:divide-two-tone",
	});
}

export default Component;
