import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vpj4m7rea.css';
import '../../css/l/lbe7xcbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vpj4m7rea"/><path class="lbe7xcbft"/></g>`,
		"fallback": "keyline-icons:arrow-up-narrow-wide-duotone",
	});
}

export default Component;
