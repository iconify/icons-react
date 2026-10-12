import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8ylcx8ej.css';
import '../../css/g/gc9u-abbc.css';
import '../../css/b/bhy-1cb-u.css';
import '../../css/x/x1twb64si.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8ylcx8ej"/><path class="gc9u-abbc"/><path class="bhy-1cb-u"/><path class="x1twb64si"/></g>`,
		"fallback": "lucide-extended:armchair-duotone",
	});
}

export default Component;
