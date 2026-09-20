import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sicbtiqev.css';
import '../../css/p/pp945zb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="sicbtiqev"/><path class="pp945zb0v"/></g>`,
		"fallback": "lucide-lab:copy-type",
	});
}

export default Component;
