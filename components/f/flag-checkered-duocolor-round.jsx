import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bli7l-qys.css';
import '../../css/k/kpj7-0bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bli7l-qys"/><path class="kpj7-0bup"/></g>`,
		"fallback": "coolicons:flag-checkered-duocolor-round",
	});
}

export default Component;
