import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mz11_egsi.css';
import '../../css/e/exk07v5nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mz11_egsi"/><path class="exk07v5nf"/></g>`,
		"fallback": "tabler:ad-2",
	});
}

export default Component;
