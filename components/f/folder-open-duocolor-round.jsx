import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbki_75ny.css';
import '../../css/w/w7e9ii9ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lbki_75ny"/><path class="w7e9ii9ft"/></g>`,
		"fallback": "coolicons:folder-open-duocolor-round",
	});
}

export default Component;
