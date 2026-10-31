import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rsirlo2lt.css';
import '../../css/e/eyyts0bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rsirlo2lt"/><path class="eyyts0bbv"/></g>`,
		"fallback": "coolicons:bike-duocolor-round",
	});
}

export default Component;
