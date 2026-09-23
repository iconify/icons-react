import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-877kj4a.css';
import '../../css/e/evefg0bda.css';
import '../../css/s/sj1zo9b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-877kj4a"/><path class="evefg0bda"/><path class="sj1zo9b8l"/></g>`,
		"fallback": "keyline-icons:gift-sparkles-duotone",
	});
}

export default Component;
