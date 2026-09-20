import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cra_kac9v.css';
import '../../css/l/ll7dpwb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cra_kac9v"/><path class="ll7dpwb3l"/></g>`,
		"fallback": "tabler:brand-doctrine",
	});
}

export default Component;
