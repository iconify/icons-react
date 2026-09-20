import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8oytbfhn.css';
import '../../css/f/f58fg730b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="b8oytbfhn"/><path class="f58fg730b"/></g>`,
		"fallback": "lucide-lab:bell-concierge-dot",
	});
}

export default Component;
