import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxy2h4oqi.css';
import '../../css/g/g4j9l7p-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hxy2h4oqi"/><path class="g4j9l7p-i"/></g>`,
		"fallback": "solar:diploma-verified-bold",
	});
}

export default Component;
