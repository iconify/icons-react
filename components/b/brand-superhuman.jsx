import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pou1s1b4e.css';
import '../../css/p/p_ycqbc3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pou1s1b4e"/><path class="p_ycqbc3z"/></g>`,
		"fallback": "tabler:brand-superhuman",
	});
}

export default Component;
