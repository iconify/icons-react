import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wyqiz5gch.css';
import '../../css/f/fau4o9bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wyqiz5gch"/><path class="fau4o9bxd"/></g>`,
		"fallback": "tabler:arrow-bear-left-2",
	});
}

export default Component;
