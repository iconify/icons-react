import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ds-e20blm.css';
import '../../css/a/ah_l9shif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ds-e20blm"/><path class="ah_l9shif"/></g>`,
		"fallback": "tabler:corner-right-down-double",
	});
}

export default Component;
