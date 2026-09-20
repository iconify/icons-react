import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xi4en0b-m.css';
import '../../css/b/boggkqmuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xi4en0b-m"/><path class="boggkqmuh"/></g>`,
		"fallback": "tabler:home-question",
	});
}

export default Component;
