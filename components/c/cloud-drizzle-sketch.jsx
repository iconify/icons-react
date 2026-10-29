import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h15jcwwia.css';
import '../../css/p/prpj5j7se.css';
import '../../css/b/byvjrw0sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h15jcwwia"/><path class="prpj5j7se wm-k"/><path class="byvjrw0sk wm-a"/></g>`,
		"fallback": "withicons:cloud-drizzle-sketch",
	});
}

export default Component;
