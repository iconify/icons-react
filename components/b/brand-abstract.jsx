import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhrqm3bvg.css';
import '../../css/q/qh4mjcc9l.css';
import '../../css/t/tcfkbc24e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nhrqm3bvg"/><path class="qh4mjcc9l"/><path class="tcfkbc24e"/></g>`,
		"fallback": "tabler:brand-abstract",
	});
}

export default Component;
