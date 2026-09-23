import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5v13_bfu.css';
import '../../css/t/tx_ah59as.css';
import '../../css/d/doyq78dlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h5v13_bfu"/><path class="tx_ah59as"/><path class="doyq78dlh"/></g>`,
		"fallback": "keyline-icons:bot-2-two-tone",
	});
}

export default Component;
