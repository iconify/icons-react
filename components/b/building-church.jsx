import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j25meopag.css';
import '../../css/k/kj-k2vb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j25meopag"/><path class="kj-k2vb-u"/></g>`,
		"fallback": "tabler:building-church",
	});
}

export default Component;
