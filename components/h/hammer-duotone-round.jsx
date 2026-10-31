import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nime2fh7d.css';
import '../../css/s/si9j86b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nime2fh7d"/><path class="si9j86b3j"/></g>`,
		"fallback": "coolicons:hammer-duotone-round",
	});
}

export default Component;
