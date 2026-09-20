import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v407nob8w.css';
import '../../css/s/soa8t5ume.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v407nob8w"/><path class="soa8t5ume"/></g>`,
		"fallback": "tabler:bat",
	});
}

export default Component;
