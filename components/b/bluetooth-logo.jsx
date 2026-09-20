import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oiga27bqi.css';
import '../../css/s/sj3ht9biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oiga27bqi"/><path class="sj3ht9biq"/></g>`,
		"fallback": "streamline-freehand:bluetooth-logo",
	});
}

export default Component;
