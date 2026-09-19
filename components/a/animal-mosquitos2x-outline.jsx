import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rcjpe4b7x.css';
import '../../css/k/km5eultqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rcjpe4b7x"/><path class="km5eultqw"/></g>`,
		"fallback": "healthicons:animal-mosquitos2x-outline",
	});
}

export default Component;
