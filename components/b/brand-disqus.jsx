import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uss-f228g.css';
import '../../css/z/z63nz4kvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uss-f228g"/><path class="z63nz4kvq"/></g>`,
		"fallback": "tabler:brand-disqus",
	});
}

export default Component;
