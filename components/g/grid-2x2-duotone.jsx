import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpvw9jb-i.css';
import '../../css/u/u1vggsbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tpvw9jb-i"/><path class="u1vggsbgj"/></g>`,
		"fallback": "keyline-icons:grid-2x2-duotone",
	});
}

export default Component;
