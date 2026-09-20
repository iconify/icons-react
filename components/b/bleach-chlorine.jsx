import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ncor4hbka.css';
import '../../css/g/g1j91ccni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ncor4hbka"/><path class="g1j91ccni"/></g>`,
		"fallback": "tabler:bleach-chlorine",
	});
}

export default Component;
