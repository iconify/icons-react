import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skbfhnfwi.css';
import '../../css/v/vq-1tvi9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="skbfhnfwi"/><path class="vq-1tvi9a"/></g>`,
		"fallback": "tabler:brand-google-big-query",
	});
}

export default Component;
