import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxbvi6bie.css';
import '../../css/x/xe53owbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxbvi6bie"/><circle class="xe53owbmy"/></g>`,
		"fallback": "tabler:arrow-bottom-circle",
	});
}

export default Component;
