import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwm5x1bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwm5x1bww"/>`,
		"fallback": "nrk:dot-radiowaves-circle-solid-expressive",
	});
}

export default Component;
