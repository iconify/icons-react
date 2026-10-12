import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2mi622fc.css';
import '../../css/r/rwbaszb0j.css';
import '../../css/c/c-4w8acaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g2mi622fc"/><path class="rwbaszb0j"/><path class="c-4w8acaz"/></g>`,
		"fallback": "lucide-extended:calendars-duotone",
	});
}

export default Component;
