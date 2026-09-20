import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn96qivij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hn96qivij"/>`,
		"fallback": "nrk:bluetooth-expressive",
	});
}

export default Component;
