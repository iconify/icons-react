import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unnhxpbhq.css';
import '../../css/s/s9z6z1bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unnhxpbhq"/><path class="s9z6z1bab"/></g>`,
		"fallback": "lucide-extended:align-start-vertical-duotone",
	});
}

export default Component;
