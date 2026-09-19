import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7-5t4bnl.css';
import '../../css/h/hgamat_lc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7-5t4bnl"/><path class="hgamat_lc"/>`,
		"fallback": "carbon:connection-two-way",
	});
}

export default Component;
