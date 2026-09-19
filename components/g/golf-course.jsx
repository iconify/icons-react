import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntnod7-io.css';
import '../../css/s/sqywcu64q.css';
import '../../css/k/kksvv-bpb.css';
import '../../css/i/i_3zdpqwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="ntnod7-io"/><circle class="sqywcu64q"/><path class="kksvv-bpb"/><path class="i_3zdpqwa"/></g>`,
		"fallback": "icon-park-outline:golf-course",
	});
}

export default Component;
