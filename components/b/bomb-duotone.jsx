import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x602xkb4n.css';
import '../../css/z/zlmwnvn6a.css';
import '../../css/o/ovqogpylh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x602xkb4n"/><path class="zlmwnvn6a"/><path class="ovqogpylh"/></g>`,
		"fallback": "lucide-extended:bomb-duotone",
	});
}

export default Component;
