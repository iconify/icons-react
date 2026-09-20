import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkw7klbil.css';
import '../../css/m/myl6tccpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tkw7klbil"/><path class="myl6tccpd"/></g>`,
		"fallback": "lucide:axe",
	});
}

export default Component;
