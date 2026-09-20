import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mf_6sfbxp.css';
import '../../css/h/h9_phyo5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mf_6sfbxp"/><path class="h9_phyo5m"/></g>`,
		"fallback": "tabler:ball-baseball",
	});
}

export default Component;
