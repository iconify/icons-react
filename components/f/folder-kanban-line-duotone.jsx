import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/p/picpb6bnn.css';
import '../../css/i/iid_8zh0q.css';
import '../../css/x/xm1qewb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><path class="picpb6bnn"/><path class="iid_8zh0q"/><path class="xm1qewb5v"/></g>`,
		"fallback": "solar:folder-kanban-line-duotone",
	});
}

export default Component;
