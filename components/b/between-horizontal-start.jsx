import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/astg_0j2c.css';
import '../../css/x/xdjwa0f2b.css';
import '../../css/d/dag9y-zvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="astg_0j2c"/><path class="xdjwa0f2b"/><rect class="dag9y-zvv"/></g>`,
		"fallback": "lucide:between-horizontal-start",
	});
}

export default Component;
