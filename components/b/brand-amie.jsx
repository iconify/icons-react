import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umtbi0b_l.css';
import '../../css/k/k153stbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="umtbi0b_l"/><path class="k153stbgu"/></g>`,
		"fallback": "tabler:brand-amie",
	});
}

export default Component;
