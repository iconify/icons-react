import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ll93bje1b.css';
import '../../css/s/sts0_ccmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ll93bje1b"/><ellipse class="sts0_ccmo"/></g>`,
		"fallback": "lucide:hole",
	});
}

export default Component;
