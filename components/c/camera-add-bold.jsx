import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dhpnoej4f.css';
import '../../css/e/ebpcszj3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dhpnoej4f"/><path class="ebpcszj3s"/></g>`,
		"fallback": "solar:camera-add-bold",
	});
}

export default Component;
