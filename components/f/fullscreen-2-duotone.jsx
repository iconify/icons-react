import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bb_e3rbxe.css';
import '../../css/l/lka2ohs0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bb_e3rbxe"/><path class="lka2ohs0h"/></g>`,
		"fallback": "keyline-icons:fullscreen-2-duotone",
	});
}

export default Component;
