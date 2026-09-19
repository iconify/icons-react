import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmgog7i0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmgog7i0d"/>`,
		"fallback": "griddy-icons:airplay-filled",
	});
}

export default Component;
