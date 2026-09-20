import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g837bmb6a.css';
import '../../css/d/dyi21gbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g837bmb6a"/><path class="dyi21gbjx"/></g>`,
		"fallback": "tabler:devices-pin",
	});
}

export default Component;
