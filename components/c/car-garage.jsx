import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-7lu9adm.css';
import '../../css/e/ed1g25uuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g-7lu9adm"/><path class="ed1g25uuv"/></g>`,
		"fallback": "tabler:car-garage",
	});
}

export default Component;
