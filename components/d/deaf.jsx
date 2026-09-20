import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6drpmb4w.css';
import '../../css/y/y2adcwwmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l6drpmb4w"/><path class="y2adcwwmo"/></g>`,
		"fallback": "tabler:deaf",
	});
}

export default Component;
