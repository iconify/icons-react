import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftp10o2ba.css';
import '../../css/n/nkre2v4-p.css';
import '../../css/y/yy397xbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftp10o2ba"/><path class="nkre2v4-p"/><path class="yy397xbou"/></g>`,
		"fallback": "lucide-extended:cone-duotone",
	});
}

export default Component;
