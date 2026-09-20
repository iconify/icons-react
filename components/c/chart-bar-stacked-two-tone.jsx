import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hutmfbuvc.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/t/t8sxhhv7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hutmfbuvc"/><path class="x9emg4bdv"/><path class="t8sxhhv7t"/></g>`,
		"fallback": "keyline-icons:chart-bar-stacked-two-tone",
	});
}

export default Component;
