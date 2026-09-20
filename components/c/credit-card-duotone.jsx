import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/drtd24r2m.css';
import '../../css/k/k6aaedqcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="drtd24r2m"/><path class="k6aaedqcg"/></g>`,
		"fallback": "keyline-icons:credit-card-duotone",
	});
}

export default Component;
