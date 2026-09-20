import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vjxcsh3sx.css';
import '../../css/a/a9k02uavj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vjxcsh3sx"/><path class="a9k02uavj"/></g>`,
		"fallback": "tabler:brand-nodejs",
	});
}

export default Component;
