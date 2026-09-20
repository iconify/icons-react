import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie7-rmbwb.css';
import '../../css/l/lbe7xcbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ie7-rmbwb"/><path class="lbe7xcbft"/></g>`,
		"fallback": "keyline-icons:arrow-up-wide-narrow-duotone",
	});
}

export default Component;
