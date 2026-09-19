import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdvk-d6wd.css';
import '../../css/a/a6npavb3q.css';
import '../../css/h/hp-glnvum.css';
import '../../css/l/l-cgyhben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gdvk-d6wd"><circle class="a6npavb3q"/><circle class="hp-glnvum"/><path class="l-cgyhben"/></g>`,
		"fallback": "ion:binoculars-outline",
	});
}

export default Component;
