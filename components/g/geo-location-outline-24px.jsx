import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i39is4wak.css';
import '../../css/n/n8owawb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i39is4wak"/><path class="n8owawb3w"/></g>`,
		"fallback": "healthicons:geo-location-outline-24px",
	});
}

export default Component;
