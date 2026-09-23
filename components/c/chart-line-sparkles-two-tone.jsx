import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wkzrmibkf.css';
import '../../css/o/okp94mb3v.css';
import '../../css/t/tv7polb_o.css';
import '../../css/y/yfmf3s9ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wkzrmibkf"/><path class="okp94mb3v"/><path class="tv7polb_o"/><path class="yfmf3s9ul"/></g>`,
		"fallback": "keyline-icons:chart-line-sparkles-two-tone",
	});
}

export default Component;
