import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/u/ua79w_tjw.css';
import '../../css/s/snl9sbb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path clip-rule="evenodd" class="ua79w_tjw"/><path class="snl9sbb4d"/></g>`,
		"fallback": "keyline-icons:chart-network-duotone",
	});
}

export default Component;
