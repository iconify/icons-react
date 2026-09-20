import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_rvzyb1l.css';
import '../../css/f/fqgjkac1o.css';
import '../../css/q/qtxsezbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x_rvzyb1l"/><path class="fqgjkac1o"/><circle class="qtxsezbbm"/></g>`,
		"fallback": "lucide:file-key",
	});
}

export default Component;
