import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie0mq3i_d.css';
import '../../css/k/kgzgwquda.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie0mq3i_d"/><path class="kgzgwquda"/>`,
		"fallback": "vaadin:envelope",
	});
}

export default Component;
