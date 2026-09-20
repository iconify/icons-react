import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ygbg5b1vs.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/a/a4sc1075z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ygbg5b1vs"/><path class="x9emg4bdv"/><path class="a4sc1075z"/></g>`,
		"fallback": "keyline-icons:chart-column-stacked-two-tone",
	});
}

export default Component;
