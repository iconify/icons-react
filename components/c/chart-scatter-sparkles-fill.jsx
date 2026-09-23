import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-_o54bad.css';
import '../../css/c/cbjy87bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m-_o54bad"/><path class="cbjy87bks"/></g>`,
		"fallback": "keyline-icons:chart-scatter-sparkles-fill",
	});
}

export default Component;
