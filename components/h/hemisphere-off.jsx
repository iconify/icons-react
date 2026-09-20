import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-y9lug6j.css';
import '../../css/y/yo6ce6b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-y9lug6j"/><path class="yo6ce6b_t"/></g>`,
		"fallback": "tabler:hemisphere-off",
	});
}

export default Component;
