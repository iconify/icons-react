import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ggst7bcrg.css';
import '../../css/i/iag78lcrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ggst7bcrg"/><path class="iag78lcrt"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-start-fill",
	});
}

export default Component;
