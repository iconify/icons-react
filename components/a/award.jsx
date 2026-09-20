import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-70ey_po.css';
import '../../css/r/rwo6qqb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-70ey_po"/><circle class="rwo6qqb0d"/></g>`,
		"fallback": "lucide:award",
	});
}

export default Component;
