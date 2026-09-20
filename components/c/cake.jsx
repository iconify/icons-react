import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/esdm6zq7p.css';
import '../../css/u/uqwtilb0q.css';
import '../../css/d/dezkjtgws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="esdm6zq7p"/><path class="uqwtilb0q"/><path class="dezkjtgws"/></g>`,
		"fallback": "streamline-sharp:cake",
	});
}

export default Component;
