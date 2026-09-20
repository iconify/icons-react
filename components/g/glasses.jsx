import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uivdmipwn.css';
import '../../css/n/n_b355bkp.css';
import '../../css/r/r9gvp-3-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="uivdmipwn"/><circle class="n_b355bkp"/><path class="r9gvp-3-b"/></g>`,
		"fallback": "lucide:glasses",
	});
}

export default Component;
