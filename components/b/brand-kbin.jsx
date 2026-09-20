import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lw3ibw2qv.css';
import '../../css/z/zqwgowbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lw3ibw2qv"/><path class="zqwgowbfc"/></g>`,
		"fallback": "tabler:brand-kbin",
	});
}

export default Component;
