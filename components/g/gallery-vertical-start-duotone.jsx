import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdxipibqw.css';
import '../../css/a/azm_ndbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdxipibqw"/><path class="azm_ndbml"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-start-duotone",
	});
}

export default Component;
