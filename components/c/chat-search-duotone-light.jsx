import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7allhbye.css';
import '../../css/l/lxs-gy18y.css';
import '../../css/j/j7r7czb3p.css';
import '../../css/u/uih-rf4pm.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrb3aaePT"><g class="ft5dv1b6b"><path class="c7allhbye"/><path class="lxs-gy18y"/><circle class="j7r7czb3p"/><path class="uih-rf4pm"/></g></mask></defs><path mask="url(#SVGrb3aaePT)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:chat-search-duotone-light",
	});
}

export default Component;
