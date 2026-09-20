import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/drtd24r2m.css';
import '../../css/k/ka7bdnkoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="drtd24r2m"/><path class="ka7bdnkoz"/></g>`,
		"fallback": "keyline-icons:credit-card-two-tone",
	});
}

export default Component;
