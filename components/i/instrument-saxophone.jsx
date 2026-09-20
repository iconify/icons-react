import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyr7ylbfe.css';
import '../../css/h/h7wrbubgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyr7ylbfe"/><path class="h7wrbubgc"/>`,
		"fallback": "streamline-freehand:instrument-saxophone",
	});
}

export default Component;
