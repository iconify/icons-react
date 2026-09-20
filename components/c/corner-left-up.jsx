import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/otjloabio.css';
import '../../css/v/vwzk8pbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="otjloabio"/><path class="vwzk8pbpk"/></g>`,
		"fallback": "lucide:corner-left-up",
	});
}

export default Component;
