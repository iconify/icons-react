import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-61yh8jp.css';
import '../../css/b/bscz2krbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-61yh8jp"/><path class="bscz2krbi"/></g>`,
		"fallback": "tabler:brand-python",
	});
}

export default Component;
