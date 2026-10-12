import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur6jrxbuh.css';
import '../../css/o/oqdy_ubyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ur6jrxbuh"/><path class="oqdy_ubyq"/></g>`,
		"fallback": "lucide-extended:git-merge-conflict-duotone",
	});
}

export default Component;
