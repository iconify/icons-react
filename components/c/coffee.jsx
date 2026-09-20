import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z1x97_b4b.css';
import '../../css/b/betfvzsib.css';
import '../../css/g/g9oapubhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z1x97_b4b"/><path class="betfvzsib"/><path class="g9oapubhp"/></g>`,
		"fallback": "tabler:coffee",
	});
}

export default Component;
