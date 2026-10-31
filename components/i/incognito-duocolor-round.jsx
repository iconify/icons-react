import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ffbyqdb3a.css';
import '../../css/t/tzub2ih4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ffbyqdb3a"/><path class="tzub2ih4h"/></g>`,
		"fallback": "coolicons:incognito-duocolor-round",
	});
}

export default Component;
