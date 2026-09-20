import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fl62xibad.css';
import '../../css/v/ve5wa3bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fl62xibad"/><path class="ve5wa3bxw"/></g>`,
		"fallback": "tabler:brand-storybook",
	});
}

export default Component;
