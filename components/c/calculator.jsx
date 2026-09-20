import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gurl2ypet.css';
import '../../css/b/b2mfdw61j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gurl2ypet"/><path class="b2mfdw61j"/></g>`,
		"fallback": "lucide:calculator",
	});
}

export default Component;
