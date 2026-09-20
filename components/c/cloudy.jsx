import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da77zbbjf.css';
import '../../css/d/d6dk5tv4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="da77zbbjf"/><path class="d6dk5tv4j"/></g>`,
		"fallback": "lucide:cloudy",
	});
}

export default Component;
